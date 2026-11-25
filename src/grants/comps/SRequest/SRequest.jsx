import React, { useState } from "react"
import { PersonalDetails } from "./PersonalDetails"
import { FamilyDetails } from "./FamilyDetails"
import { StudyDetails } from "./StudyDetails"
import { AccountDetails } from "./AccountDetails"
import { RightDetails } from "./RightDetails"
import { useSelector } from "react-redux"

export const SRequest = () => {

    //שליפת המשתמש הנוכחי
    const curr=useSelector(state=>state.user.currentUser)

    const [personalDetails, setPersonalDetails] = useState({
        tz: curr?.tz,
        name: curr?.name,
        date: "",
        address: "",
        phone: "",
    })
    const [familyDetails, setFamilyDetails] = useState({
        fatherName: "",
        motherName: "",
        childrenCount: "",
        adultsCount: "",
    })
    const [studyDetails, setStudyDetails] = useState({
        major: "",
        annualTuition: "",
        studyYears: "",
    })
    const [accountDetails, setAccountDetails] = useState({
        accountOwner: "",
        ownerTz: "",
        bankName: "",
        branchNumber: "",
        accountNumber: "",
    })
    const [rightDetails, setRightDetails] = useState(false)

    
    return <>
        <h1>הגשת בקשה:</h1>
        {curr?<CurrentForm>
            <PersonalDetails text="פרטים אישיים:" setPersonalDetails={setPersonalDetails} personalDetails={personalDetails}></PersonalDetails>
            <FamilyDetails text="פרטי משפחה:" setFamilyDetails={setFamilyDetails} familyDetails={familyDetails}></FamilyDetails>
            <StudyDetails text="פרטי הלימודים:" setStudyDetails={setStudyDetails} studyDetails={studyDetails}></StudyDetails>
            <AccountDetails text="פרטי חשבון:" setAccountDetails={setAccountDetails} accountDetails={accountDetails}></AccountDetails>
            <RightDetails text="אימות פרטים:" setRightDetails={setRightDetails} rightDetails={rightDetails} accountDetails={accountDetails}
                studyDetails={studyDetails} familyDetails={familyDetails} personalDetails={personalDetails}></RightDetails>
        </CurrentForm>:
        <p>כדי להגיש בקשה עליך להרשם</p>}
    </>
}

export const CurrentForm = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const count = React.Children.count(props.children)
    const children = React.Children.toArray(props.children)

    const indexes = []

    for (let i = 0; i < count; i++) {
        indexes[i] = i
    }
    return <>
        <div>
            <div>
                {indexes.map(x => <button key={x} onClick={() => setCurrentIndex(x)}>{children[x].props.text}</button>)}
            </div>
            {children[currentIndex]}
        </div>
    </>
}

