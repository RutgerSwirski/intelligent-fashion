import { Form, FormProps, FORM_ERROR } from "../../core/components/Form"
import { LabeledTextField } from "../../core/components/LabeledTextField"
import { z } from "zod"

export function ProductForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
    </Form>
  )
}
