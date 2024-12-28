import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const styles = {
        body: {
            backgroundColor: 'black',
            color: '#919eaf',
            border: '2px dotted black',
            width: '500px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
        },
        form: {
            margin: '20px',
        },
        Loginform: {
            color: 'white',
        },
        input: {
            border: '1px solid whitesmoke',
            borderRadius: '3px',
            padding: '10px',
            width: '423px',
            backgroundColor: 'black',
            color: 'whitesmoke',
            marginBottom: '10px',
        },
        button: {
            backgroundColor: 'rgb(201, 15, 15)',
            border: 'none',
            color: 'wheat',
            width: '425px',
            padding: '10px',
            cursor: 'pointer',
        },
        socialContainer: {
            display: 'flex',
            margin: '20px auto',
            justifyContent: 'space-between',
            margin: '17px',
        },
        social: {
            padding: '10px',
            color: 'white',
            textAlign: 'center',
            width: '130px',
            borderRadius: '5px',
        },
        Facebook: {
            backgroundColor: 'rgb(62, 62, 161)',
        },
        Google: {
            backgroundColor: 'red',
        },
        Twitter: {
            backgroundColor: 'rgb(101, 101, 231)',
        },
        loginText: {
            textAlign: 'center',
            marginTop: '39px',
        },
    };

    return (
        <div style={styles.body}>
            <form style={styles.form}>
                <h1>Signup</h1>
                
                <p>Already have an account? 
                    <Link to="/login">
                        <span style={styles.Loginform}>Login</span>
                    </Link>       
                </p>
                  
                <input type="text" name="Username" placeholder="Username" required style={styles.input} />
                <br />
                <input type="email" name="Email" placeholder="Email" required style={styles.input} />
                <br />
                <input type="password" name="Password" placeholder="Password" required style={styles.input} />
                <br />
                <input type="password" name="ConfirmPassword" placeholder="Confirm Password" required style={styles.input} />
                <br />
                <button type="submit" style={styles.button}>Signup</button>
                <p style={styles.loginText}>or login with</p>
            </form>
            <div style={styles.socialContainer}>
                <div style={{ ...styles.social, ...styles.Facebook }}>Facebook</div>
                <div style={{ ...styles.social, ...styles.Google }}>Google</div>
                <div style={{ ...styles.social, ...styles.Twitter }}>Twitter</div>
            </div>
        </div>
    );
};

export default Signup;