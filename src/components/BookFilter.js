import React from 'react'
import './Filter.css';

export default class BookFilter extends React.Component{



    handleBookFilter(value){
        this.props.changeHandlerBook(value)
    }
        

    handleSortFilter(value){
        this.props.changeHandlerSort(value)
    }


    //pass up state as a prop aka lifting the state up


    render(){

        return (
        <div className="inlinedisplay">
            <form className='form'>
                <label htmlFor="filter">Filter book by: </label>
                    <select 
                    name="filter" 
                    id="filter"
                    bookvalue = {this.props.filter}
                    onChange = {event => this.handleBookFilter(event.target.value)}
                    > 
                    <option value="ebooks">all ebooks</option>                    
                    <option value="free-ebooks">free ebooks</option>
                    <option value="paid-ebooks">paid ebooks</option>
                    </select>
            </form>

            <form className='form'>
                <label htmlFor="orderBy">Filter by: </label>
                    <select 
                    name="orderBy" 
                    id="orderBy"
                    filtervalue = {this.props.orderBy}
                    onChange ={ event => this.handleSortFilter(event.target.value)}
                    >
                    <option value="relevance">relevance</option>
                    <option value="newest ">newest </option>
                    </select>
            </form>
        </div>
        )
   }
}
