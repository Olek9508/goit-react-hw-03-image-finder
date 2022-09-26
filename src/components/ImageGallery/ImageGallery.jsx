import { Component } from "react";
import axios from "axios";

export class ImageGallery extends Component {
    state = {
        hits: [],
        loading: false,
        error: null,
        page:1,
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(_, prevState) {
        const { page } = this.state;
        if (prevState.page !== page) {
            this.fetchPosts();
        }
    }

    fetchPosts() {
        const { page } = this.state;
        this.setState({
            loading: true,
        })
        axios.get(`https://pixabay.com/api/?q=cat&page=${page}&key=29244012-a3c66d184bfa690c232ef78cc&image_type=photo&orientation=horizontal&per_page=12`)
            .then(({ data }) => {
                this.setState(({ hits }) => {
                return {
                    hits: [...hits,...data]
                }
                })
            })
            .catch(error => {
            this.setState({error})
            })
            .finally(() => this.setState({ loading:false}))
    }

    render()
    {
        const { hits, loading, error } = this.state;
        const isPosts = Boolean(hits.length)
        return (
            <ul class="gallery"></ul>
            // {loading && <Loader/> }
        { error && <p>Try again later</p> }
        {isPosts && </>}
        )
    }
}