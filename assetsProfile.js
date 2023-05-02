import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 330,
    duration: '40s'
    // stages: [
    //     { duration: '20s', target: 200 },
    //     { duration: '1m', target: 100 },
    //     { duration: '20s', target: 0 },
    // ],
};

export default function () {
    const res = http.get('http://ecs-alb-prod-1071394439.eu-north-1.elb.amazonaws.com/api/assets/name/martina-stoessel');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
