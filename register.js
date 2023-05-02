import http from "k6/http";
import { check } from "k6";

export let options = {
    stages: [
        { duration: "10m", target: 100 }, // Ramp up to 100 virtual users over 10 minutes
        { duration: "20m", target: 100 }, // Maintain 100 virtual users for 20 minutes
        { duration: "10m", target: 0 }, // Ramp down to 0 virtual users over 10 minutes
    ],
};

export default function () {
    let user = {
        // username: `testuser${__VU}`, // Add a unique username for each virtual user
        email: `testuser${__VU}@example.com`, // Add a unique email for each virtual user
        password: "pppppppP", // Replace with a valid password

    };

    let response = http.post(
        "https://demo-api.trendex.vip/api/auth/register",
    );

    check(response, {
        "Registration was successful": (res) => res.status === 200,
    });
}
