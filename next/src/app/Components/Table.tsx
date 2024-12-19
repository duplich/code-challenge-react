import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react";
import { Product } from "@/app/App";
import { func } from "ts-interface-checker";


const GFlowTable = ({data}) => {
    // console.log("gflow data", data);

    const products:Product[] = data;

    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
    const [reverse, setReverse] = useState(true);

    useEffect(() => {
        // Sort products by price when component mounts
        // const sorted = [...products].sort((a, b) => a.Price - b.Price);
        setSortedProducts(products);
    }, []);

    function sortByPrice(){
        const sorted = [...products].sort((a, b) => a.Price - b.Price);
        reverse
            ? setSortedProducts([...sorted.reverse()])
            : setSortedProducts(sorted)
        setReverse(!reverse);
    }
    function sortByRating(){
        const sorted = [...products].sort((a, b) => a.Rating - b.Rating);
        reverse
            ? setSortedProducts([...sorted.reverse()])
            : setSortedProducts(sorted)
        setReverse(!reverse);
    }

    function sortByStock(){
        const sorted = [...products].sort((a, b) => a.Stock - b.Stock);
        reverse
            ? setSortedProducts([...sorted.reverse()])
            : setSortedProducts(sorted)
        setReverse(!reverse);
    }

    function handleOnStock(e){
        console.log(e.target.checked)
        if(e.target.checked){
            const productsOnStock = sortedProducts.filter(item => item.Stock > 0)
            setSortedProducts([...productsOnStock])
        }
        else{
            setSortedProducts([...products])
        }
    }

    function searchByName(e){
        const name = e.target.value;
        if(name !== "" || name !== null){
            const searchedProducts = sortedProducts.filter(item => {
                item.Name?.includes(name)
                console.log("found elements", item)
            })
            console.log("Searched products", searchedProducts)
        }
    }

    /**
     * render stock red if lower than 0
     */
    function renderStock(stock) {
        if (stock < 0) {
            return <p className={"text-red-500"}>{stock}</p>
        }
        return <p className={"text-white"}>{stock}</p>
    }


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <div className="filters flex flex-row bg-gray-700 mb-5 rounded rounded-b-lg p-4 text-gray-300">
                <p>Filters</p>
                <div className={"ml-3"}>
                    <input className={"mr-2"} type="checkbox" onChange={(e) => handleOnStock(e)}/>
                    Show Products on stock
                </div>
                <div className={"ml-5"}>Search: <input onChange={(e)=> searchByName(e)} className={"px-2 rounded border-solid border-2 text-gray-700"} type={"text"} defaultValue={""} placeholder={"filter by name"} /></div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex items-center cursor-pointer hover:text-gray-500" onClick={() => sortByStock()}>
                            Stock
                            <a href="#">
                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                            </a>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                            Category
                            <a href="#">
                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                            </a>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex items-center cursor-pointer hover:text-gray-500" onClick={() => sortByPrice()}>
                            Price
                            <a href="#">
                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                            </a>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex items-center hover:text-gray-500 cursor-pointer" onClick={() => sortByRating()}>
                            Rating
                            <a href="#">
                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                            </a>
                        </div>
                    </th>
                    {/*<th scope="col" className="px-6 py-3">*/}
                    {/*    <span className="sr-only">Edit</span>*/}
                    {/*</th>*/}
                </tr>
                </thead>
                <tbody>

                {sortedProducts.map((item, index) => (
                    <tr key={index} className={"bg-white dark:bg-gray-800"}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.Name || <p className={"text-orange-500"}>Not set</p>}
                        </th>
                        <td className="px-6 py-4">
                            {renderStock(item.Stock) || <p className={"text-orange-500"}>Not set</p>}
                        </td>
                        <td className="px-6 py-4">
                            {item.Category || <p className={"text-orange-500"}>Not set</p>}
                        </td>
                        <td className="px-6 py-4">
                            {item.Price || <p className={"text-red-500"}>0.00</p>}
                        </td>
                        <td className="px-6 py-4">
                            {item.Rating || <p className={"text-orange-500"}>Not set</p>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default GFlowTable;
