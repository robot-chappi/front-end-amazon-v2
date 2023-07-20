import { useAuth } from "@/hooks/useAuth";
import { IReview } from "@/types/review.interface";
import Heading from "@/ui/Heading";
import Modal from "@/ui/modal/Modal";
import { useState } from "react";
import LeaveReviewForm from "./LeaveReviewForm";
import ReviewItem from "./ReviewItem";

interface IProductReviews {
    reviews: IReview[]
    productId: number
}

export default function ProductReviews({
    reviews, productId
}: IProductReviews) {
    const [isModalOpen, setModalOpen] = useState(false)
    const {user} = useAuth()

    if(!reviews.length) return null

    return (
        <section id="reviews" className="mt-20">
            <div className="md-9">
                <Heading className="mb-9">Reviews: </Heading>
                {user && (
                    <button className="text-aqua" onClick={() => setModalOpen(true)}>
                        Leave a review
                    </button>
                )}
            </div>

            {user && (
                <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
                    <LeaveReviewForm productId={productId}/>
                </Modal>
            )}

            <div className="grid grid-cols-4 gap-10">
                {reviews.map(review => (
                    <ReviewItem key={review.id} review={review}/>
                ))}
            </div>
        </section>
    );
}