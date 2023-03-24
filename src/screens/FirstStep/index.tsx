import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import SideBarSteps from "../../components/SideBarSteps";
import { useForm } from "react-hook-form";
import "./index.scss";
import { useContextApp } from "../../appContext/appContext";

const FirstStep = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { validated, setValidateUser } = useContextApp();
    console.log(validated);

    const navigate = useNavigate();
    const onSubmit = () => {
        if (Object.entries(errors).length === 0) {
            setValidateUser(true);
            navigate("/second_step");
        }
    };
    return (
        <MainContainer>
            <SideBarSteps currentStep={1} />
            <section className="sectionForm">
                <div className="divTitleForm">
                    <h1>Personal info</h1>
                    <span>
                        Please provide your name, email address, and phone
                        number.
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="formCont">
                    <div className="contInputFields">
                        <div>
                            <label>Name</label>
                            <span className="errorMessage">
                                <>{errors.name && errors.name.message}</>
                            </span>
                            <input
                                className={
                                    errors.name && errors.name.message
                                        ? "inputError"
                                        : ""
                                }
                                placeholder="e.g. Stephen King"
                                {...register("name", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
                                        message: "Invalid name",
                                    },
                                })}
                            />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <span className="errorMessage">
                                <>{errors.email && errors.email.message}</>
                            </span>
                            <input
                                className={
                                    errors.email && errors.email.message
                                        ? "inputError"
                                        : ""
                                }
                                placeholder="e.g. stepthenking@lorem.com"
                                type="email"
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email",
                                    },
                                })}
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <span className="errorMessage">
                                <>
                                    {errors.phoneNumber &&
                                        errors.phoneNumber.message}
                                </>
                            </span>
                            <input
                                className={
                                    errors.phoneNumber &&
                                    errors.phoneNumber.message
                                        ? "inputError"
                                        : ""
                                }
                                placeholder="e.g. 1234567890"
                                type="text"
                                {...register("phoneNumber", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                                        message: "Invalid phone number",
                                    },
                                })}
                            />
                        </div>
                    </div>

                    <div className="divBtn">
                        <NextStepBtn type="submit" />
                    </div>
                </form>
            </section>
            <div className="divBtnMobile">
                <NextStepBtn onClick={handleSubmit(onSubmit)} type="submit" />
            </div>
        </MainContainer>
    );
};

export default FirstStep;
