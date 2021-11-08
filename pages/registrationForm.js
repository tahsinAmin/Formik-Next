import React from 'react'
import {useFormik} from 'formik'

export default function registrationForm() {

   const validate = values => {
      const errors = {}

      if(!values.email){
         errors.email = 'Required'
      }else if (values.email.length < 4){
         errors.email = 'Must be 5 characters or more'
      }

      if(!values.password){
         errors.password = 'Required'
      }else if (values.password.length < 8){
         errors.password = 'Must be 5 characters or more'
      }

      if(!values.repassword){
         errors.repassword = 'Required'
      }else if (values.repassword.length < 8){
         errors.repassword = 'Must be 5 characters or more'
      }
      
      return errors
   }

   const formik = useFormik({
      initialValues:{
         email:'',
         password:'',
         repassword:''
      },
      validate,
      onSubmit: values => {
         alert(JSON.stringify(values, null, 2))
      }
   })
   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={formik.handleSubmit}>
            <input
             onChange={formik.handleChange} 
             value={formik.email}
             onBlur={formik.handleBlur} name="email" type="email" placeholder="Email here"/>
            {formik.touched.email && formik.errors.email ? <div className='text-sm text-red-600'>{formik.errors.email}</div> : null }
            <input
             onChange={formik.handleChange} 
             value={formik.password}
             onBlur={formik.handleBlur} name="password" type="password" placeholder="Password here"/>
            {formik.touched.password && formik.errors.password ? <div className='text-sm text-red-600'>{formik.errors.password}</div> : null }
            <input
             onChange={formik.handleChange} 
             value={formik.repassword}
             onBlur={formik.handleBlur} name="repassword" type="password" placeholder="Password again"/>
            {formik.touched.repassword  && formik.errors.repassword ? <div className='text-sm text-red-600'>{formik.errors.repassword}</div> : null }
            <button type="submit">Register</button>
         </form>
      </div>
   )
}
