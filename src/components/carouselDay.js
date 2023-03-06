import { Carousel } from 'react-responsive-carousel';
import ListResult from "./listResult";
import React from "react";
import Footer from './footer';

class CarouselDay extends React.Component {
    state = {
        "Monday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Tuesday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Wednesday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Thursday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Friday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Saturday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        "Sunday": {
            breakfast: [],
            secondBreakfast: [],
            dinner: [],
            supper: []
        },
        activeIndex: 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            console.log(this.props.product);
            const day = this.getDay(this.state.activeIndex);
            console.log(day);
            const productsOfPartOfDay = this.state[day][this.props.product.partOfDay];
            productsOfPartOfDay.push(this.props.product);
            this.setState({...this.state, [day]: {...this.state[day], [this.props.product.partOfDay]: productsOfPartOfDay}});
            console.log(this.state);
        }
    }

    getDay(activeIndex) {
        if (activeIndex === 0) return "Monday";
        if (activeIndex === 1) return "Tuesday";
        if (activeIndex === 2) return "Wednesday";
        if (activeIndex === 3) return "Thursday";
        if (activeIndex === 4) return "Friday";
        if (activeIndex === 5) return "Saturday";
        if (activeIndex === 6) return "Sunday";
    }

    render() {
        return (
            <>
            <Carousel autoPlay={false} showThumbs={false} onChange={(activeIndex) => this.setState({...this.state, activeIndex: activeIndex})} style={{width: '50%'}}>
                <div>
                    <h3>Monday</h3>
                    <ListResult list={this.state["Monday"]}/>
                </div>
                <div>
                    <h3>Tuesday</h3>
                    <ListResult list={this.state["Tuesday"]}/>
                </div>
                <div>
                    <h3>Wednesday</h3>
                    <ListResult list={this.state["Wednesday"]}/>
                </div>
                <div>
                    <h3>Thursday</h3>
                    <ListResult list={this.state["Thursday"]}/>
                </div>
                <div>
                    <h3>Friday</h3>
                    <ListResult list={this.state["Friday"]}/>          
                </div>
                <div>
                    <h3>Saturday</h3>
              
                        <ListResult list={this.state["Saturday"]}/>
                    
                </div>
                <div>
                    <h3>Sunday</h3>
                
                        <ListResult list={this.state["Sunday"]}/>
                    
                </div>
            </Carousel>
            <Footer products={this.state[this.getDay(this.state.activeIndex)]}/>
            </>
        );
    }
}

export default CarouselDay;