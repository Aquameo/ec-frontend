var NewItem= createReactClass({
    handleClick() {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        var price = this.refs.price.value;
        var img_url = this.refs.img_url.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description, price: price, img_url: img_url } },
            success: (response) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='description' placeholder='Enter a description' />
                <input ref='price' placeholder='Enter a price' />
                <input ref='img_url' placeholder='Enter a image URL' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
