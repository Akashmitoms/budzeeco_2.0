<template>
   <section class="padding">
        <div class="if1">
            <h1>Inquiry Form</h1> <hr>
            <p>Submit the details below to get a call back from our team and to understand how we can help you in resolving your loans.</p>
            <h6>Note: We do not provide any loans. We only assist in loan resolution and stopping harassment by lenders.</h6>
            <form >
                <label for="">Name <i>*</i></label> <br>
                <input type="text" placeholder="Enter your name" required> <br>
                <label for="">Mobile <i>*</i></label> <br>
                <input type="text" placeholder="Enter your mobile number" required> <br>
                <label for="">Email <i>*</i></label> <br>
                <input type="email" placeholder="Enter your email" required> <br>
                <label for="">City <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Delhi NCR</option>
                    <option value="">Mumbai</option>
                    <option value="">Pune</option>
                    <option value="">Bangalore</option>
                    <option value="">Hyderabad</option>
                    <option value="">Chennai</option>
                    <option value="">Kolkata</option>
                    <option value="">Others</option>
                </select> <br>
                <label for="">Marital Status <i>*</i></label> <br>
                <select>
                    <option value="">Select</option>
                    <option value="">Single</option>
                    <option value="">Married</option>
                </select> <br>
                <label for="">Employment Status <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Not Employed</option>
                    <option value="">Self Employed</option>
                    <option value="">Employed with Government</option>
                    <option value="">Employed with private company</option>
                    <option value="">Business With more than 10 Employees</option>
                </select> <br>
                <label for="">Monthly income <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Currently no income</option>
                    <option value="">Less than Rs. 15,000 per month</option>
                    <option value="">Rs. 15,000 - 20,000 per month</option>
                    <option value="">Rs. 20,000 - 40,000 per month</option>
                    <option value="">Rs. 40,000 - 60,000 per month</option>
                    <option value="">Rs. 60,000 - 80,000 per month</option>
                    <option value="">Rs. 80,000 - 1,00,000 per month</option>
                    <option value="">More than Rs. 1,00,000 per month</option>
                </select> <br>
                <label for="">Total credit card dues <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">No credit card dues</option>
                    <option value="">Less than Rs. 1 lacs</option>
                    <option value="">Rs. 1-2 lacs</option>
                    <option value="">Rs. 2-3 lacs</option>
                    <option value="">Rs. 3-4 lacs</option>
                    <option value="">Rs. 4-5 lacs</option>
                    <option value="">Rs. 5-10 lacs</option>
                    <option value="">Rs. 10-15 lacs</option>
                    <option value="">Rs. 15-20 lacs</option>
                    <option value="">More than Rs. 20 lacs</option>
                </select> <br>
                <label for="">Are you sure the total credit card outstanding dues is correct? <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Yes, my credit card dues are less than Rs.2 lacs</option>
                    <option value="">No, my credit card dues are more than Rs.2 lacs</option>
                </select>
                <label for="">What is the total credit card outstanding? <i>*</i></label> <br>
                <input type="text" name="" placeholder="Outstanding amount" id=""> <br>outstanding
                <label for="">Total personal loan amount <i>*</i></label> <br>  
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">No personal loan</option>
                    <option value="">Less than Rs. 1 lacs</option>
                    <option value="">Rs. 1-2 lacs</option>
                    <option value="">Rs. 2-3 lacs</option>
                    <option value="">Rs. 3-4 lacs</option>
                    <option value="">Rs. 4-5 lacs</option>
                    <option value="">Rs. 5-10 lacs</option>
                    <option value="">Rs. 10-15 lacs</option>
                    <option value="">Rs. 15-20 lacs</option>
                    <option value="">More than Rs. 20 lacs</option>
                </select> <br>
                <label for="">Payment status <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Paying full amount but with difficulty</option>
                    <option value="">Paying minimum amount for few months</option>
                    <option value="">Not paying minimum & getting collection calls</option>
                </select> <br>
                <label for="">Are you facing any harassment? <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Not facing harassment</option>
                    <option value="">Facing some harassment</option>
                    <option value="">Facing severe harassment</option>
                </select> <br>
                <label for="">You can start resolution process with Rs.3,000 and arrange additional funds towards first installment later.
                    Is that manageable for you? <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Yes I can arrange Rs.3000 in next 1-2 days</option>
                    <option value="">Yes I can arrange Rs.3000 in next 2-3 days</option>
                    <option value="">No I cannot arrange Rs.3000 to start the process</option>
                </select> <br>
                <label for="">Are you comfortable with English or would prefer another language for phone call or WhatsApp messaging? <i>*</i></label> <br>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Tamil</option>
                    <option value="">Malayalam</option>
                    <option value="">Others</option>
                </select> <br>
                <label for="">Alternate phone number: </label> <br>
                <input type="text" name="" id=""> <br>
                <label for="">Explain Your Problem/ Queries: <i>*</i></label> <br>
                <textarea name="" id="" cols="30" rows="10"></textarea> <br>
                <button>Submit</button>
            </form>
        </div>
            
        
   </section>
</template>

<style scoped>
.padding{
    margin-top: 5%;
    padding: 5% 5% 5% 10%;
}
.if1 h1{
    font-size: 2.5rem;
    font-weight: 700;
    color: #163232;
}
.if1 p{
    font-size: 1.2rem;
    color: #163232;
}
.if1 h6{
    font-size: 1rem;
    color: #163232;
}
.if1 form label{
    font-size: 1.2rem;
    color: #163232;
}
.if1 form input{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border: 1px solid #163232;
}
.if1 form select{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #163232;
}
.if1 form textarea{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #163232;
}
.if1 form button{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #163232;
    background-color: #163232;
    color: white;
    font-size: 1.2rem;
}
i{
    color: red;
   
}

@media screen and (max-width: 1200){
    .if1{
        padding: 5% 5% 5% 5%;
    }
    .if1 h1{
        font-size: 2rem;
    }
    .if1 p{
        font-size: 1rem;
    }
    .if1 h6{
        font-size: 0.8rem;
    }
    .if1 form label{
        font-size: 1rem;
    }
    .if1 form input{
        padding: 8px;
        margin: 8px 0;
    }
    .if1 form select{
        padding: 8px;
        margin: 8px 0;
    }
    .if1 form textarea{
        padding: 8px;
        margin: 8px 0;
    }
    .if1 form button{
        padding: 8px;
        margin: 8px 0;
    }
    i{
        font-size: 0.8rem;
    }
    
}
</style>