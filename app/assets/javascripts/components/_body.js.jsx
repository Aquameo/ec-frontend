var Body = createReactClass({
    getInitialState() {
        return { items: [], editable: false }
    },
    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
    },
    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },
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
        alert('Added');
        window.location.reload()
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
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success(response) {
                this.removeItemClient(id);
            }
        });
        alert('Deleted');
        window.location.reload()
    },
    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },
    onUpdate(item) {
        this.props.onUpdate(item);
    },
    handleUpdate(item) {
        $.ajax({
                url: `/api/v1/items/${item.id}`,
                type: 'PUT',
                data: { item: item },
                success: (response) => {
                    this.props.updateItems(item);
                }
            }
        );
        alert('Edited');
        window.location.reload()
    },
    updateItems(item) {
        var items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);

        this.setState({items: items});
    },
    render() {
        var items= this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}
                          handleDelete={this.handleDelete.bind(this, item.id)}
                          handleUpdate={this.handleUpdate}/>
                </div>
            )
        });

        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' /> <br />
                <input ref='description' placeholder='Enter a description' /> <br />
                <input ref='price' placeholder='Enter a price' /> <br />
                <input ref='img_url' placeholder='Enter a image URL' /> <br />
                <button onClick={this.handleClick}>Submit</button>
                {items}
            </div>
        )
    }
});
