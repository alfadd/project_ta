import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputField({
  title,
  type = "text",
  value,
  onChange,
  className = "",
  disabled = false,
  placeholder = "",
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className={className}>
      <p>{title}</p>

      <div className="input-wrapper">
        <input
          type={
            type === "password"
              ? isShowPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />

        {type === "password" && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}