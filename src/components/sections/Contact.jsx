import { useState } from "react";


/**Component Imports */
import SectionTitle from "../ui/SectionTitle";
import SectionBody from "../ui/SectionBody";
import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";
import Button from "../ui/Button";

/**Icon Imports */
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});
    const [formData, setFormData] = useState({
        full_name: '',
        senders_email: '',
        senders_message: ''
    });


    const handleChange = (e) =>{
        const {name, value} = e.target;


        // Update form data state
        setFormData({
            ...formData,
            [name]: value
        });

        let errorMessage = '';
        let successMessage = '';
        
        if(name === 'full_name'){
            if(value.trim() === ''){
                errorMessage = 'Name can not be empty';
            }else if(value.trim().length < 2){
                errorMessage = 'Name must be at least 2 characters long';
            }else{
            successMessage = 'Looks good!';
            }
        }

        
        if(name === 'senders_email'){
            if(value.trim() === ''){
                errorMessage = 'Email is can not be empty';
            }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                errorMessage = 'Please enter a valid email address';
            }
            else{
            successMessage = 'Valid email address';
            }
        }

        if(name === 'senders_message'){

            const trimmedLength = value.trim().length;
            const minLength = 10;
            const maxLength = 250;
            const remainingCharacters = maxLength - trimmedLength;

            if(trimmedLength === 0){
                errorMessage = 'Message can not be empty';
            }else if(trimmedLength < minLength){
                errorMessage = `Message must be at least ${minLength} characters long — ${minLength - trimmedLength} more needed.`;
            }
            else if(trimmedLength > maxLength){
                errorMessage = `Message must be less than ${maxLength} characters long — remove ${trimmedLength - maxLength} characters.`;
            }
            else{
                
                successMessage = `Thanks for sharing your message — ${remainingCharacters} characters left.`;
            }
        }

        // Update errors state
        setErrors({
            ...errors,
            [name]: errorMessage
        });

        // update success state
        setSuccess({
            ...success,
            [name]: successMessage
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(formData);

        //reset form fields
        setFormData({
            full_name: '',
            senders_email: '',
            senders_message: '' 
        })
    }




    return ( 
        <section className=" text-center space-y-8 lg:space-y-10 pb-40  " id="contact">
            <div className="space-y-6 lg:mx-auto lg:max-w-3xl">
                <SectionTitle>Get In Touch</SectionTitle>
                <SectionBody>I’d love to hear from you! Whether you have a question about my work, a project idea, or just want to connect, feel free to drop me a message. I’ll do my best to get back to you as soon as possible.</SectionBody>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-15 lg:p-10  lg:rounded-2xl lg:shadow-neutral lg:shadow-2xl lg:max-w-5xl lg:mx-auto">

                <form className="space-y-5  lg:max-w-md" method="POST" onSubmit={handleSubmit}>
                    <TextInput 
                        type='text' 
                        name='full_name' 
                        id='name' 
                        label='Your Name'  
                        placeholder='John Doe' 
                        icon={<FaUser />} 
                        onChange={handleChange}
                        value={formData.full_name} 
                        error={errors.full_name} 
                        success={success.full_name}/>

                    <TextInput 
                        type='email' 
                        name='senders_email' 
                        id='email' 
                        label='Email Address'  
                        placeholder='JohnDoe@Email.com' 
                        icon={<MdAlternateEmail />} 
                        onChange={handleChange} 
                        value={formData.senders_email} 
                        error={errors.senders_email} 
                        success={success.senders_email}/>

                    <TextAreaInput 
                        name='senders_message' 
                        id='massage' 
                        label='Message'  
                        placeholder='Please Enter Your Message'
                        onChange={handleChange} 
                        value={formData.senders_message} 
                        error={errors.senders_message} 
                        success={success.senders_message}/>

                    <Button type='submit'>Send Message</Button>
                </form>

                {/**Desktop Illustartion */}
                <div className="hidden lg:block">
                    <img src="/src/assets/images/contact_illustration.svg" alt="Contact illustration" className="aspect-square"/>
                </div>
                
            </div>
            
        </section>
    );
}
export default Contact; 