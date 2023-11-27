import "./App.css";
import Paragraph from "./Paragraph";

const notes = [
    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="insights-engine.refed.org/food-waste-monitor?break_by=destination&indicator=tons-waste&view=detail&year=2021">insights-engine.refed.org/food-waste-monitor?break_by=destination&indicator=tons-waste&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,
    <>
        “Food Waste in America | Feeding America.” <i>Feeding America</i>, <a href="http://www.feedingamerica.org/our-work/reduce-food-waste">www.feedingamerica.org/our-work/reduce-food-waste</a>. Accessed 27 Nov. 2023.
    </>,
    <>
        United States Census Bureau. “U.S. And World Population Clock.” <i>United States Census Bureau, United States Census Bureau</i>, 2023, <a href="http://www.census.gov/popclock/">www.census.gov/popclock/</a>. Accessed 27 Nov. 2023.
    </>,

    <>
        “Take Extinction off Your Plate.” <i>Take Extinction off Your Plate</i>, <a href="http://www.takeextinctionoffyourplate.com/food-waste">www.takeextinctionoffyourplate.com/food-waste</a>. Accessed 27 Nov. 2023. <br />

        The source states that Americans waste 1200 calories per day. Multiplying by 365 days, this would indicate that 438,000 calories are wasted in a year.
    </>,

    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=us-dollars-surplus&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=us-dollars-surplus&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,

    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,
]

export default function Notes() {
    return (
        <> 
            <div className="read-article">
                <a href="/">
                    Read the article
                </a>
            </div>
            <div className='title-container'>
            <h1>From Data to Dumpsters</h1>
            <h3 className='subtitle'>Notes and Citations</h3>
            </div>
            <div>
                <Paragraph>
                    <ol className="citations-page">
                        {
                            notes?.map((note, index) => {
                                return <li id={`citation-${index+1}`}>
                                    {note}
                                </li>
                            })
                        }
                    </ol>
                </Paragraph>
            </div>
        </>
    )
}