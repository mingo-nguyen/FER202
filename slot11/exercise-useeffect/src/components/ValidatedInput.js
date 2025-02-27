import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

// Hàm xác thực đầu vào (ví dụ: kiểm tra độ dài tối thiểu)
const validateInput = (value) => {
  return value.length >= 5; // Giả sử giá trị phải có ít nhất 5 ký tự
};

// Email validation using regex
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email ? emailRegex.test(email) : false;
};

// Password validation - at least 8 characters
const validatePassword = (password) => {
  return password ? password.length >= 8 : false;
};

// Name validation - not empty and at least 2 characters
const validateName = (name) => {
  return name && name.trim().length >= 2;
};

function ValidatedInput() {
  const [value, setValue] = useState(""); // State lưu trữ giá trị đầu vào
  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ của đầu vào
  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi
  
  // Email & Password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  // New form fields states
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState("");
  
  const [gender, setGender] = useState("");
  const [genderTouched, setGenderTouched] = useState(false);
  const [genderError, setGenderError] = useState("");
  
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownTouched, setDropdownTouched] = useState(false);
  const [dropdownError, setDropdownError] = useState("");
  
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);
  const [termsError, setTermsError] = useState("");
  
  const [formValid, setFormValid] = useState(false);

  // Value validation
  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);
    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
    } else {
      setErrorMessage("");
    }
  }, [value]);

  // Email validation
  useEffect(() => {
    if (emailTouched) {
      const isEmailValid = validateEmail(email);
      if (!email) {
        setEmailError("Email là bắt buộc");
      } else if (!isEmailValid) {
        setEmailError("Email không hợp lệ");
      } else {
        setEmailError("");
      }
    }
  }, [email, emailTouched]);

  // Password validation
  useEffect(() => {
    if (passwordTouched) {
      const isPasswordValid = validatePassword(password);
      if (!password) {
        setPasswordError("Mật khẩu là bắt buộc");
      } else if (!isPasswordValid) {
        setPasswordError("Mật khẩu phải có ít nhất 8 ký tự");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);
  
  // Name validation
  useEffect(() => {
    if (nameTouched) {
      const isNameValid = validateName(name);
      if (!name) {
        setNameError("Tên là bắt buộc");
      } else if (!isNameValid) {
        setNameError("Tên phải có ít nhất 2 ký tự");
      } else {
        setNameError("");
      }
    }
  }, [name, nameTouched]);
  
  // Gender validation
  useEffect(() => {
    if (genderTouched) {
      if (!gender) {
        setGenderError("Vui lòng chọn giới tính");
      } else {
        setGenderError("");
      }
    }
  }, [gender, genderTouched]);
  
  // Dropdown validation
  useEffect(() => {
    if (dropdownTouched) {
      if (!selectedOption) {
        setDropdownError("Vui lòng chọn một lựa chọn");
      } else {
        setDropdownError("");
      }
    }
  }, [selectedOption, dropdownTouched]);
  
  // Terms validation
  useEffect(() => {
    if (termsTouched) {
      if (!termsAgreed) {
        setTermsError("Bạn phải đồng ý với điều khoản");
      } else {
        setTermsError("");
      }
    }
  }, [termsAgreed, termsTouched]);

  // Overall form validation
  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isInputValid = validateInput(value);
    const isNameValid = validateName(name);
    const isGenderValid = !!gender;
    const isDropdownValid = !!selectedOption;
    const isTermsValid = termsAgreed;
    
    setFormValid(
      isEmailValid && 
      isPasswordValid && 
      isInputValid && 
      isNameValid && 
      isGenderValid && 
      isDropdownValid && 
      isTermsValid
    );
  }, [email, password, value, name, gender, selectedOption, termsAgreed]);

  return (
    <Form>
      <Form.Group controlId="validatedName" className="mb-3">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          isValid={nameTouched && !nameError}
          isInvalid={nameTouched && !!nameError}
        />
        <Form.Control.Feedback type="invalid">
          {nameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validatedInput" className="mb-3">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validatedEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isValid={emailTouched && !emailError}
          isInvalid={emailTouched && !!emailError}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validatedPassword" className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isValid={passwordTouched && !passwordError}
          isInvalid={passwordTouched && !!passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group controlId="validatedGender" className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={() => {
              setGender("male");
              setGenderTouched(true);
            }}
            isInvalid={genderTouched && !!genderError}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={() => {
              setGender("female");
              setGenderTouched(true);
            }}
            isInvalid={genderTouched && !!genderError}
          />
          <Form.Check
            inline
            type="radio"
            label="Khác"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={() => {
              setGender("other");
              setGenderTouched(true);
            }}
            isInvalid={genderTouched && !!genderError}
          />
        </div>
        {genderTouched && genderError && (
          <Form.Text className="text-danger">{genderError}</Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="validatedDropdown" className="mb-3">
        <Form.Label>Chọn một lựa chọn</Form.Label>
        <Form.Control
          as="select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          onBlur={() => setDropdownTouched(true)}
          isValid={dropdownTouched && !dropdownError}
          isInvalid={dropdownTouched && !!dropdownError}
        >
          <option value="">-- Chọn một lựa chọn --</option>
          <option value="option1">Lựa chọn 1</option>
          <option value="option2">Lựa chọn 2</option>
          <option value="option3">Lựa chọn 3</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {dropdownError}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group controlId="validatedTerms" className="mb-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với các điều khoản và điều kiện"
          checked={termsAgreed}
          onChange={(e) => {
            setTermsAgreed(e.target.checked);
            setTermsTouched(true);
          }}
          isInvalid={termsTouched && !!termsError}
          feedback={termsError}
          feedbackType="invalid"
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!formValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;