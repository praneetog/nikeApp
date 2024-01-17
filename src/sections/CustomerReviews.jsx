import AOS from "aos"
import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
import { useEffect } from "react"

const CustomerReviews = () => {

  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);

  return (
    <section className="max-container" >
      <div data-aos="fade-up">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      </div>

      <div className="mt-24 flex flex-1 justify-evenly itemss-center max-lg:flex-col gap-14" data-aos="fade-up">
        {reviews.map((review) => (          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
           />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews