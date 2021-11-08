import React from 'react'
import {Form , Formik} from 'formik'

const initialValues: InvestmentDetails = {
   fullName: "",
   initialInvestment: undefined,
   investmentRisk: [],
   commentAboutInvestmentRisk: "",
   dependents: -1,
   acceptedTermsAndConditions: false,
 };

export default function FormDemo() {
   return (
      <div>
         <div>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
               {({ values }) => (
                  <Form>

                  </Form>
               )}
            </Formik>
         </div>
      </div>
   )
}
