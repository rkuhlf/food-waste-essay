import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Paragraph from "./Paragraph";

const takeExtinctionOffYourPlate = <>
        “Take Extinction off Your Plate.” <i>Take Extinction off Your Plate</i>, <a href="http://www.takeextinctionoffyourplate.com/food-waste">www.takeextinctionoffyourplate.com/food-waste</a>. Accessed 27 Nov. 2023. <br />

        The source states that Americans waste 1200 calories per day. Multiplying by 365 days, this would indicate that 438,000 calories are wasted in a year.
    </>;

const emissionsOfDiets = <>
Nabipour Afrouzi, H., et al. “A Comprehensive Review on Carbon Footprint of Regular Diet and Ways to Improving Lowered Emissions.” <i>Results in Engineering</i>, vol. 18, 1 June 2023, p. 101054, <a href="http://www.sciencedirect.com/science/article/pii/S2590123023001810">www.sciencedirect.com/science/article/pii/S2590123023001810</a>.
</>

const notes = [
    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="http://insights-engine.refed.org/food-waste-monitor?break_by=destination&indicator=tons-waste&view=detail&year=2021">insights-engine.refed.org/food-waste-monitor?break_by=destination&indicator=tons-waste&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,
    <>
        “Food Waste in America | Feeding America.” <i>Feeding America</i>, <a href="http://www.feedingamerica.org/our-work/reduce-food-waste">www.feedingamerica.org/our-work/reduce-food-waste</a>. Accessed 27 Nov. 2023.
    </>,
    <>
        United States Census Bureau. “U.S. And World Population Clock.” <i>United States Census Bureau, United States Census Bureau</i>, 2023, <a href="http://www.census.gov/popclock/">www.census.gov/popclock/</a>. Accessed 27 Nov. 2023.
    </>,

    takeExtinctionOffYourPlate,

    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=us-dollars-surplus&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=us-dollars-surplus&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,

    <>
        “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    “Fact of the Week: One in Seven U.S. Households Is Food Insecure.” <i>Coalition on Human Needs</i>, <a href="http://www.chn.org/voices/fact-week-one-seven-u-s-households-food-insecure/">www.chn.org/voices/fact-week-one-seven-u-s-households-food-insecure/</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Strzyzynska, Weronika. “Can the World Feed 8bn People Sustainably?” <i>The Guardian</i>, 15 Nov. 2022, <a href="http://www.theguardian.com/global-development/2022/nov/15/can-the-world-feed-8bn-people-sustainably">www.theguardian.com/global-development/2022/nov/15/can-the-world-feed-8bn-people-sustainably</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Ritchie, Hannah, and Max Roser. “CO2 Emissions.” <i>Our World in Data</i>, 2020, <a href="">ourworldindata.org/co2-emissions</a>. Accessed 27 Nov. 2023.
    <br />
    <>
    “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=food_type&indicator=total-mtco2e-footprint&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </> <br />
    The first source states that the emissions from the US each year are equivalent to 5.3 billion tons of CO2. The second states that emissions from food waste are equivalent to 380 million metric tons.
    </>,

    <>
    Lott, Melissa C. “UN Says That If Food Waste Was a Country, It'd Be the #3 Global Greenhouse Gas Emitter.” <i>Scientific American Blog Network</i>, 12 Sept. 2013, <a href="http://blogs.scientificamerican.com/plugged-in/un-says-that-if-food-waste-was-a-country-ite28099d-be-the-3-global-greenhouse-gas-emitter/">blogs.scientificamerican.com/plugged-in/un-says-that-if-food-waste-was-a-country-ite28099d-be-the-3-global-greenhouse-gas-emitter/</a>. Accessed 27 Nov. 2023.
    </>,
    <>
    “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=sector&indicator=tons-surplus&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=sector&indicator=tons-surplus&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,
    <>
    “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=cause&indicator=tons-surplus&sector=residential&view=detail&year=2021">https://insights-engine.refed.org/food-waste-monitor?break_by=cause&indicator=tons-surplus&sector=residential&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Aubrey, Allison. “NPR Choice Page.” <i>Npr</i>, 2019, <a href="http://www.npr.org/sections/thesalt/2019/05/23/726079350/to-reduce-food-waste-fda-urges-best-if-used-by-date-labels">www.npr.org/sections/thesalt/2019/05/23/726079350/to-reduce-food-waste-fda-urges-best-if-used-by-date-labels</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Ostrow, Ozette. “Spoiler Alert: Confusion over Date Labeling Creates Avoidable Food Waste.” <i>Center for EcoTechnology</i>, 16 Oct. 2020, <a href="http://www.centerforecotechnology.org/food-waste-from-date-labels/">www.centerforecotechnology.org/food-waste-from-date-labels/</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Shott, Chris. “10 Most Wasted Grocery Items in America, according to a New Survey.” <i>Eat This Not That</i>, 20 Apr. 2023, <a href="http://www.eatthis.com/most-wasted-grocery-items/">www.eatthis.com/most-wasted-grocery-items/</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    “Once Again, US and Europe Way Ahead on Daily Calorie Intake.” <i>UN News</i>, 12 Dec. 2022, <a href="http://news.un.org/en/story/2022/12/1131637</a>">news.un.org/en/story/2022/12/1131637</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    “Obesity in the U.S.” <i>Food Research & Action Center</i>, <a href="http://frac.org/obesity-health/obesity-u-s-2">frac.org/obesity-health/obesity-u-s-2</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Wilkinson, J. M., and M. R. F. Lee. “Review: Use of Human-Edible Animal Feeds by Ruminant Livestock.” <i>Animal</i>, vol. 12, no. 8, 12 Sept. 2017, pp. 1735-1743, https://doi.org/10.1017/s175173111700218x.
    </>,

    <>
    “Cattle per Acre Calculator.” <i>Omni Calculator</i>, <a href="http://www.omnicalculator.com/biology/cattle-per-acre">www.omnicalculator.com/biology/cattle-per-acre</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    According to the USDA, 100g of steak is equivalent to 26g of protein. According to the source below, the average amount of meat obtained from a cow is 480 pounds. That comes out to 54431 grams.
    <br />
    “Amount of Freezer Beef Expected from a Carcass?” <i>Beef2Live</i>, <a href="http://beef2live.com/story-amount-freezer-beef-expected-carcass-0-111639">beef2live.com/story-amount-freezer-beef-expected-carcass-0-111639</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    James Videle. “Comparison of Protein and Caloric Energy (KCal) Produced per Acre on U.S. Farms.” <i>The Humane Herald</i>, 9 May 2019, <a href="humaneherald.org/2019/05/09/comparison-of-protein-and-caloric-energy-kcal-produced-per-acre-on-u-s-farms/">humaneherald.org/2019/05/09/comparison-of-protein-and-caloric-energy-kcal-produced-per-acre-on-u-s-farms/</a>. Accessed 27 Nov. 2023.
    </>,

    emissionsOfDiets,

    <>
    “Feeding Beef Cattle.” <i>Penn State Extension</i>, <a href="http://extension.psu.edu/feeding-beef-cattle">extension.psu.edu/feeding-beef-cattle</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    “Chicken Production Volume U.S. 2009-2019.” <i>Statista</i>, <a href="http://www.statista.com/statistics/1108994/us-total-chicken-production/">www.statista.com/statistics/1108994/us-total-chicken-production/</a>. Accessed 27 Nov. 2023.
    </>,

    <>
    Larsen, Janet. “Peak Meat: U.S. Meat Consumption Falling.” Earth-Policy.org, <i>Earth Policy Institute</i>, 7 Mar. 2012, <a href="http://www.earth-policy.org/data_highlights/2012/highlights25">www.earth-policy.org/data_highlights/2012/highlights25</a>. Accessed 27 Nov. 2023.
    </>,

    emissionsOfDiets,

    <>
    Molidor, Jennifer. “Checked out - Medium.” <i>Medium</i>, 10 Apr. 2018, <a href="medium.com/checked-out">medium.com/checked-out</a>. Accessed 28 Nov. 2023.
    </>,

    <>
    Lallanilla, Mark. “50% of US Beef Is Eaten by Just 12% of Americans, Mostly Men.” <i>NY Post</i>, 31 Aug. 2023, <a href="http://nypost.com/2023/08/31/50-of-us-beef-is-eaten-by-just-12-of-americans-mostly-men-study/">nypost.com/2023/08/31/50-of-us-beef-is-eaten-by-just-12-of-americans-mostly-men-study/</a>.
    </>,

    <>
    “ReFED - Food Waste Monitor.” <i>Insights Engine</i>, <a href="https://insights-engine.refed.org/food-waste-monitor?break_by=cause&indicator=tons-surplus&sector=residential&view=detail&year=2021">insights-engine.refed.org/food-waste-monitor?break_by=cause&indicator=tons-surplus&sector=residential&view=detail&year=2021</a>. Accessed 27 Nov. 2023.
    </>,
]

export default function Notes() {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const index = urlParams.get("citation");

        document.getElementById(`citation-${index}`)?.scrollIntoView();
    })

    return (
        <> 
            <div className="read-article">
                <Link to="/">
                    Read the article
                </Link>
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
                                return <li key={index} id={`citation-${index+1}`}>
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