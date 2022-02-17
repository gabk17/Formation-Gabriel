import React from 'react'
import { illustration3 } from '../assets/index'

function About() {
  return (
    <div>
      <div className="container py-4 my-5" >
        <div className="row">
          <div className="col-md-8 mt-5 mr-5">
            <h1 className="display-5">About Us</h1>
            <p className="lead mt-4">
              It all started in 1986, when owner Gabriello Kanaano opened her first U.S. Pizza Company in a burned out clock shop in Levy, AR. Armed with a unique recipe for thin crust pizza and an old fashioned stone hearth oven, U.S. Pizza embarked on a quarter-of-a-century journey that has done everything but dwindle.

              That first store grossed only about $1,000 per week, but ten other U.S. Pizza Company locations have opened since. In addition to the chain of U.S. Pizza Companies, in 1988, Judy opened Hillcrest Liquor Store on Kavanaugh Boulevard in Little Rock.

              Since we opened our first store in 1989, we've been making our thin crust pizza from scratch when you order it. And we still use stone hearth ovens. That's one of the reasons our unique pizzas are worth the wait!

              We pride ourselves in offering you the very best pizza, salads and sandwiches, and we value your patronage. Click the Awards tab to read more about our tasty history, distinguishing awards, and community involvement.
            </p>
          </div>
          <div class="col-md-3">
            <img src={illustration3} class=" img-responsive" alt="" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About