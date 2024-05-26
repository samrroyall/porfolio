import Button from "./Button";
import Icon from "./Icon";

const errorIcon = <Icon icon={"\uf06a"} className="text-error-text mr-2" />;

const successClasses =
  "text-secondary-text dark:text-secondary-text-dark text-center";

const ErrorMsg: Record<string, string> = {
  recaptcha: "Recaptcha challenge failed",
  unauthenticated: "User authentication failed",
  unknown: "Something went wrong",
};

interface FormProps {
  action: string;
  children: Html.Children;
  id: string;
  className?: string;
  error?: string;
  submitLabel?: string;
  success?: boolean;
}

const Form = ({
  action,
  children,
  id,
  className,
  error,
  submitLabel,
  success,
}: FormProps): JSX.Element => {
  const recaptchaFuncs = `
    function onSubmit(token) {
      document.getElementById("${id}").submit();
    }
  `;

  const errorMsg = !!error ? ErrorMsg[error] : null;

  return (
    <>
      <script>{recaptchaFuncs}</script>
      <div
        class={`text-error-text flex items-center ${success === false ? "" : "hidden"}`}
      >
        {errorIcon}
        <span>{errorMsg ?? ErrorMsg.unknown}</span>
      </div>
      <div class={`${successClasses} ${success === true ? "" : "hidden"}`}>
        <div class="text-2xl font-bold">{"Thank you"}</div>
        <span>{"The form was submitted successfully"}</span>
      </div>
      <form
        id={id}
        class={`flex flex-col ${success === true ? "hidden" : ""} ${className ?? ""}`}
        action={action}
        method="post"
        hx-on-keyup={`htmx.find("#${id}-submit-button").disabled = !htmx.find("#${id}").checkValidity();`}
        hx-on-submit={`event.preventDefault(); grecaptcha.execute();`}
      >
        {children}
        <div
          class="g-recaptcha"
          data-sitekey={process.env.RECAPTCHA_SITE_KEY}
          data-callback="onSubmit"
          data-size="invisible"
        />
        <div class="my-3 text-right">
          <Button
            id={`${id}-submit-button`}
            type="submit"
            disabled={true}
            label={submitLabel || "Submit"}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
