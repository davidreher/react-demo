var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is another comment</Comment>
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