import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import { url } from 'inspector';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Gridimg() {
    return (
        <div style={{
            'background-image':
                'url(https://wallpapers.com/images/hd/texture-creased-black-paper-k5ydlknbccms2t4t.jpg)',
        }}>

            <Box sx={{ width: "100%", height: "600px", overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <div style={{ scale: "84%" }}>
                            <ImageListItem key={item.img}>
                                <img style={{ borderRadius: "20px" }}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <a style={{
                                    color: "white",
                                    fontFamily: "Comfortaa",
                                    fontSize: "10px"
                                }} href={item.href}>{item.author}</a>
                                {/* <ImageListItemBar style={{
                            color: "white",
                            fontFamily: "Comfortaa",
                            fontSize: "10px"

                        }} position="below" title={item.title} /> */}
                            </ImageListItem>
                        </div>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

// const itemData = [
//     {
//         img: ' https://images-na.ssl-images-amazon.com/images/I/51w5vHiRutL.jpg',
//         title: 'Thinking, Fast and Slow',
//         author: 'swabdesign',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//         author: 'Pavel Nekoranec',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//         author: 'Charles Deluvio',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//         author: 'Christian Mackie',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//         author: 'Darren Richardson',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//         author: 'Taylor Simpson',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//         author: 'Ben Kolde',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//         author: 'Philipp Berndt',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//         author: 'Jen P.',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//         author: 'Douglas Sheppard',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//         author: 'Fi Bell',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//         author: 'Hutomo Abrianto',
//     },
// ];

const itemData = [
    {
        img: 'https://www.theindianbookstore.in/cdn/shop/products/66_69a992f8-bb69-4b34-81f9-c12d1638fcda.png?v=1661933288',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71ReUWzM0XL._AC_UF894,1000_QL80_.jpg',
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71tpUqYmSpL._SL1500_.jpg',
        title: 'Emotional Intelligence',
        author: 'Daniel Goleman',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71-rr6pKWrL._AC_UF1000,1000_QL80_.jpg',
        title: 'The Man Who Mistook His Wife for a Hat',
        author: 'Oliver Sacks',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71XvcOz-HlL._SL1500_.jpg',
        title: 'Flow: The Psychology of Optimal Experience',
        author: 'Mihaly Csikszentmihalyi',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71NDnv8+hvL._AC_UF1000,1000_QL80_.jpg',
        title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
        author: 'Susan Cain',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/71SPjJ+UnLL._AC_UF1000,1000_QL80_.jpg',
        title: 'Influence: The Psychology of Persuasion',
        author: 'Robert B. Cialdini',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/61usuuR1YcL._SL1500_.jpg',
        title: 'Blink: The Power of Thinking Without Thinking',
        author: 'Malcolm Gladwell',
        href: ""
    },
    {
        img: 'https://m.media-amazon.com/images/I/61e2z7Nz3rL._SL1500_.jpg',
        title: 'The Tipping Point: How Little Things Can Make a Big Difference',
        author: 'Malcolm Gladwell',
        href: ""
    },
    // {
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/51g99m1rC2L._SX335_BO1,204,203,200_.jpg',
    //     title: "Man's Search for Meaning",
    //     author: 'Viktor E. Frankl',
    // },
    // {
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/51tzATf0k5L._SX337_BO1,204,203,200_.jpg',
    //     title: 'Grit: The Power of Passion and Perseverance',
    //     author: 'Angela Duckworth',
    // },
    // {
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/51RBoeljB8L._SX332_BO1,204,203,200_.jpg',
    //     title: 'The Gifts of Imperfection',
    //     author: 'Brené Brown',
    // },
];


