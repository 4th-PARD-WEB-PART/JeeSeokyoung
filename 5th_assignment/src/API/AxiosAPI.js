import axios from "axios";

const server = "http://ec2-13-209-3-68.ap-northeast-2.compute.amazonaws.com:8080";
// 서버 주소를 상수로 선언하여 주소가 고정된 값임을 알려줍니다.

// 여기서 중요한 점은 서버의 주소를 어떻게 완성하느냐입니다. 스웨거를 잘 확인하고 서버에게 어떻게 주소를 보낼 수 있을 지 생각해보세요.
// 템플릿 리터럴 (``) 을 이용해서 표현식을 잘 다룰 수 있도록 해봅시다.

export const getMembersAPI = async (part) => {
    try {
        const response = await axios.get(`${server}/user?part=${part}`);
        // 서버로부터 특정 part 파라미터를 기준으로 사용자 데이터를 가져오기 위해 GET을 쓰고 파라미터는 URL만으로 part까지 작성해줍니다.
        return response.data;
        // 여기서 실제로 필요한 데이터는 data 속성 안에 들어 있기 때문에 .data를 붙여줍니다.
    } catch (error) {
        console.error("Error fetching(part) user data:", error);
        throw error;
    }
};


export const postMemberAPI = async (data) => {
    try {
        const response = await axios.post(`${server}/user`, data);
        // 새로운 사용자 데이터를 서버에 전송하기 위해 POST를 쓰고 파라미터는 URL(user까지)과 data로 해줍니다.
        return response;
        // 응답 객체를 반환하여, 이후 필요한 다른 정보에도 접근할 수 있도록 해줍니다.
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


// 아래의 API는 클백세미나 때 진행할 예정입니다.

export const putMemberAPI = async (id, data) => {
    try {
        //your code here
        
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


export const deleteMemberAPI = async (id) => {
    try {
        //your code here

    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
};
