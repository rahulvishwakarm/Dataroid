import React,{useEffect}  from 'react';
import './DataStoryMain.css'

function DataStoryMain() {

    useEffect(() => {
        document.title = 'Data Story - Leading B2B Database Provider in India';
    });

    return (
        <div className="DataStory">
            <div className="DataStory-Heading">
                <h2>Data Story</h2>
            </div>
            <div className="DataStory-Description">
                <p>It's amazing how quickly things go obsolete these days. Who knows it better than companies in the business of providing marketing data. With a decay rate of over 50% per year, it wouldn’t be incorrect to categorize marketing data as a perishable item.</p>
                <p>For businesses, maintaining and updating customer data has always been a pain point. To add to it, unstructured data is pouring in through various channels which makes the job of data maintenance even more challenging. Companies are relying on their internal bandwidth expecting data to be corrected at the source (point of entry into the system) relying majorly on the sales and marketing teams. This obviously isn’t their job and eventually begins the struggle and gradual collapse of data environment. Even worse, CRM’s are blamed and more is invested into technology upgrade or migration to a new CRM without realizing the actual cause of issue.</p>
                <p>The good part, data can be corrected. Accurate information can be collected in parts and pieces across sources like Ministry of Corporate Affairs, Stock exchanges, corporate media news, social media, events and exhibition companies, BPO’s, trade associations, company websites etc but the challenge again isn’t data collection, it is data collation – linking data from each of these sources and making sense out of it.</p>
                <p>Considering the challenges, a better way to update customer data is to rely on a third-party data provider to do it for you—to cleanse, correct, append and replace the data on a regular basis.</p>
                <p>It is our business and expertise to keep data updated leveraging the sources listed above. LeadHunt.in can help you to manage (cleanse, correct, append, replace)your data on a regular basis so your teams can focus on doing what they do best and leave data management to the data experts.</p>
                <p>Write to us at <a href="mailto:test@dataroid.in">test@dataroid.in</a> to know more.</p>
            </div>
        </div>
    )
}

export default DataStoryMain;
