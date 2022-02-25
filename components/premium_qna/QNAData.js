import { v4 as uuid } from "uuid"

class QNA {
    constructor(id, qtn, ans) {
        this.id = id;
        this.qtn = qtn;
        this.ans = ans;
    }
}

export const QNAArray = [
    new QNA(
        uuid(),
        "When will I get charged?",
        "If you've never upgraded to Premium or never started a Premium trial before, you are eligible for a 1-month trial, and the first Premium subscription charge on your credit card will be after the trial. Once the trial ends, your subscription will auto-renew unless you cancel. If you purchased a monthly subscription, you will get charged every month. If you purchased an annual subscription, you will be charged every year."
    ),
    new QNA(
        uuid(),
        "Will my subscription automatically renew?",
        "MyFitnessPal Premium features are available on a monthly or yearly subscription basis, depending on which one you purchase. By default, your subscription will renew automatically when your membership period is up—unless you manually cancel your subscription."
    ),
    new QNA(
        uuid(),
        "Can I cancel anytime?",
        "Yes, you may cancel your recurring subscription at any time. Cancel at least 24 hours before the next renewal date to avoid being charged for the upcoming billing cycle. When you cancel, you are canceling the next billing charge—Premium features will remain available to you until the end of your current paid subscription period, regardless of when you cancel the automatic renewal."
    ),
    new QNA(
        uuid(),
        "What do I need to upgrade?",
        "Just tap one of the buttons below to start a monthly or annual subscription. A Premium subscription adds more extensive options to MyFitnessPal's feature set, increasing customizability and flexibility. Your MyFitnessPal account will stay just as you've built it—friends, favorite foods, diary history—with many new and enhanced features added once you go Premium."
    )
]