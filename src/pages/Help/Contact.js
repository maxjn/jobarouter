import { Form, useActionData, redirect } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="Post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {data && data.error && <p>{data.error}</p>}
    </div>
  );
}

export const formAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (submission.message.length < 10) {
    return { error: "The message has to be at least 10 characters" };
  }

  return redirect("/");
};
