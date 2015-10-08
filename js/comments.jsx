var CommentBox = React.createClass({
    getInitialState: function () {
        return {
            data: []
        };
    },

    componentDidMount: function () {
        setTimeout(function () {
            this.setState({
                data: [
                    {"author": "Pete Hunt", "text": "This is one comment"},
                    {"author": "Jordan Walke", "text": "This is another comment"}
                ]
            });
        }.bind(this), 3000);
    },

    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    propTypes: {
        comments: React.PropTypes.arrayOf(React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
        })).isRequired
    },
    render: function () {
        var comments = this.props.comments.map(function (comment, i) {
            return (
                <Comment author={comment.author} key={i}>{comment.text}</Comment>
            );
        });
        return (
            <div className="commentList">
                {comments}
            </div>
        );
    }
});

var Comment = React.createClass({
    propTypes: {
        author: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span>{this.props.children}</span>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    getInitialState: function () {
        return {
            name: null,
            text: null
        };
    },

    onNameChanged: function (e) {
        this.setState({name: e.target.value});
    },

    onTextChanged: function (e) {
        this.setState({text: e.target.value});
    },

    render: function () {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" onChange={this.onNameChanged} value={this.state.name}/>
                <input type="text" placeholder="Say something..." onChange={this.onTextChanged}
                       value={this.state.text}/>
                <input type="submit"/>
            </form>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content'));