var Item = createReactClass({
    getInitialState() {
        return {editable: false}
    },

    handleEdit() {
        if(this.state.editable) {
            var name = this.refs.name.value;
            var id = this.props.item.id;
            var description = this.refs.description.value;
            var price = this.refs.price.value;
            var img_url = this.refs.img_url.value;
            var item = { id: id , name: name , description: description, price: price, img_url: img_url };
            this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    },

    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
        var price = this.state.editable ? <input type='text' ref='price' defaultValue={this.props.item.price} /> : <p>{this.props.item.price}</p>;
        var img_url = this.state.editable ? <input type='text' ref='img_url' defaultValue={this.props.item.img_url} />: (this.props.item.img_url.empty ? '' : <img src={this.props.item.img_url} />);
        var img_empty = this.props.item.img_url.length < 5 ? '':<br />;

        return (
            <div>
                {name}{this.state.editable ? <br /> : ''}
                {description}{this.state.editable ? <br /> : ''}
                {price}{this.state.editable ? <br /> : ''}
                {img_url}{this.state.editable ? <br /> : ''}
                {img_empty}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit }> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});
