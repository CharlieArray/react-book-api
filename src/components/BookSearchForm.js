import React from 'react'
import BookFilter from './BookFilter'
import './SearchForm.css'

//controlled component [form]//
export default class BookSearchForm extends React.Component{

    render(){
        return (
            <div className="searchform">
                <form 
                onSubmit={this.props.handleSubmit}>
                    <label htmlFor="input" >Search for Book: </label>
                    <input className='input-field'
                        type="text" 
                        value = {this.props.value}
                        name='input'
                        id='input' 
                        placeholder='Adventures of Don Quixote'
                        onChange = { event => this.props.handleChange(event.target.value) }
                    />
                    <label htmlFor="submit-button"></label>
                    <input 
                    type="submit" 
                    id='submit-button' 
                    value="submit"
                    />
                </form>
                <BookFilter
                    changeHandlerBook = {this.props.changeHandlerBook}
                    changeHandlerSort = {this.props.changeHandlerSort}
                    filter = {this.props.filter}
                    orderBy = {this.props.orderBy}
                />
            </div>
        )
    }
}
