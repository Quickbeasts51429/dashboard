import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <div  className="searchPage">
            <p>62 stays #  26 August to 30 August
            3 2 guest</p>
            <h1>Stays Nearby</h1>
            <div className="searchPage_info">
            <Button variant="button"> Cancellation Flexibility</Button>
            <Button variant="button">Type Of Place</Button>
            <Button variant="button">Price</Button>
            <Button variant="button">Rooms And Beds</Button>
                <Button variant="button">More Filters</Button>
            </div>
            <SearchResult
                img="https://tse2.mm.bing.net/th?id=OIP.LpXn1vP1Cbhi8xEAnZJ9XwHaCu&pid=Api&P=0&w=424&h=157"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1guest # 1.5 Shared Bathroom # Wi-fi # Kitchen # Free Parking # Washing Machine"
                star={4.3}
                price="$90/night"
                total="$380 Total"
            />
        </div>
    )
}

export default SearchPage
