import React, { useEffect, useState } from "react";
import "./Groupshellinfo.css";

const Groupshellinfo = () => {
  // Login States
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const ADMIN = { name: "admin", pass: "1234" };

  // Group States
  const [groupCode, setGroupCode] = useState(
    localStorage.getItem("groupCode") || ""
  );
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members") || "[]")
  );
  const [groupPassword, setGroupPassword] = useState(
    localStorage.getItem("groupPassword") || ""
  );
  const [enteredGroupPass, setEnteredGroupPass] = useState("");
  const [secretVisible, setSecretVisible] = useState(false);

  // Inputs
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  // Products
  const products = [
    "Product 1", "Product 2", "Product 3", "Product 4", "Product 5",
    "Product 6", "Product 7", "Product 8", "Product 9", "Product 10"
  ];

  // Save in LocalStorage automatically
  useEffect(() => {
    localStorage.setItem("groupCode", groupCode);
    localStorage.setItem("members", JSON.stringify(members));
    localStorage.setItem("groupPassword", groupPassword);
  }, [groupCode, members, groupPassword]);

  // ---------------------------------------
  // STEP 1 → LOGIN
  // ---------------------------------------
  const handleLogin = () => {
    if (loginName === ADMIN.name && loginPass === ADMIN.pass) {
      setIsLogin(true);
    } else {
      alert("❌ Wrong Login!");
    }
  };

  // ---------------------------------------
  // STEP 2 → Generate Group Code
  // ---------------------------------------
  const generateGroupCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGroupCode(code);
    alert(`Your Group Code: ${code}`);
  };

  // ---------------------------------------
  // STEP 3 → Add Members (storeName + email + code verify)
  // ---------------------------------------
  const addMember = () => {
    if (codeInput !== groupCode) {
      alert("❌ Wrong Code!");
      return;
    }

    if (!storeName.trim() || !email.trim()) {
      alert("Please fill all fields!");
      return;
    }

    if (members.length >= 4) {
      alert("Group is full!");
      return;
    }

    const newMember = { storeName, email };
    setMembers([...members, newMember]);

    setStoreName("");
    setEmail("");
    setCodeInput("");
  };

  // ---------------------------------------
  // STEP 4 → Set Group Password
  // ---------------------------------------
  const saveGroupPassword = () => {
    if (groupPassword.length < 3) {
      alert("Password too short!");
      return;
    }
    alert("Group Password Set Successfully!");
  };

  // ---------------------------------------
  // STEP 5 → Verify Password for Secret Data
  // ---------------------------------------
  const verifyGroupPassword = () => {
    if (enteredGroupPass === groupPassword) {
      setSecretVisible(true);
    } else {
      alert("Wrong Password!");
    }
  };

  return (
    <div className="Groupshellinfomaindiv">

      {/* STEP 1: LOGIN */}
      {!isLogin && (
        <div className="box">
          <h3>Login</h3>
          <input placeholder="Name" value={loginName} onChange={(e) => setLoginName(e.target.value)} /><br/><br/>
          <input placeholder="Password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} /><br/><br/>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* AFTER LOGIN */}
      {isLogin && (
        <>
          {/* STEP 2 → GENERATE CODE */}
          <div className="box">
            <h3>Generate Group Code</h3>
            <button onClick={generateGroupCode}>Generate Code</button>
            {groupCode && <p><b>Group Code:</b> {groupCode}</p>}
          </div>

          {/* STEP 3 → ADD MEMBERS */}
          {groupCode && members.length < 4 && (
            <div className="box">
              <h3>Add Members ({members.length}/4)</h3>

              <input placeholder="Store Name" value={storeName} onChange={(e) => setStoreName(e.target.value)} /><br/><br/>
              <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
              <input placeholder="Enter Group Code" value={codeInput} onChange={(e) => setCodeInput(e.target.value)} /><br/><br/>

              <button onClick={addMember}>Add Member</button>
            </div>
          )}

          {/* STEP 4 → SET GROUP PASSWORD */}
          {members.length === 4 && (
            <div className="box">
              <h3>Set Group Password</h3>
              <input placeholder="Set Password" value={groupPassword} onChange={(e) => setGroupPassword(e.target.value)} /><br/><br/>
              <button onClick={saveGroupPassword}>Save</button>
            </div>
          )}

          {/* STEP 5 → RENDER MEMBERS & ENTER PASSWORD */}
          {members.length === 4 && (
            <div className="box">
              <h2>Group Members</h2>
              <ul>
                {members.map((m, i) => (
                  <li key={i}>{m.storeName} - {m.email}</li>
                ))}
              </ul>

              <hr />

              <h3>Enter Group Password</h3>
              <input value={enteredGroupPass} onChange={(e) => setEnteredGroupPass(e.target.value)} placeholder="Enter Password" />
              <button onClick={verifyGroupPassword}>Confirm</button>
            </div>
          )}

          {/* STEP 6 → SECRET DIV */}
          {secretVisible && (
            <div className="box">
              <h2>🔒 Secret Product List</h2>
              <ul>
                {products.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Groupshellinfo;
