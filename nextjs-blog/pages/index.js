import Link from 'next/link';
import  Blogheader  from '../components/header.js';

const itemLink = [
    {
        id:0,
        name:'home',
        path:'/'
    },
    {
        id:1,
        name:'about',
        path:'/about'
    },
    {
        id:2,
        name:'skill',
        path:'/skill'
    },
];

export default function Home (){
    return (
        <div>
            <Blogheader />
            <ul>
                {
                    itemLink.map( (item) => (
                        <li key={item.id}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}