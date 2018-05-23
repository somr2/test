const init = {
    headerNav:{
        links: [{title: 'Home',         url: ''},
                {title: 'News',         url: 'news'},
                {title: 'Products',     url: 'products'},
                {title: 'Contact Us',   url: 'contact'}]
    },
    coverPhoto:{
        photos: ['img1', 'img2', 'img3']
    },
    product:{id: 1, category: 'test', name: 'test', material: 'test', price: 'test', description: 'test'},
    productListing:{
        products:[
            {id: 1, category: 'necklace', name: 'inifiity necklace', material: 'diamond', price: '1899', description: 'very goooooood'},
            {id: 2, category: 'ring', name: 'inifiity ring', material: 'silver', price: '1855599', description: 'very bad'},
            {id: 3, category: 'wrist', name: 'inifiity wrist', material: 'gold', price: '18995151', description: 'very soso'}
        ],
        redirect: false,
        whereTo: ''
    }

}

export default init