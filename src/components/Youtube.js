import "./Youtube.css";
import { IoCompassOutline } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";

function Youtube() {
  return (
    <div className="youtube">
      {/* 핸드폰 상단바 */}
      <div className="yt__top">
        <div className="yt__top_left">
          <span>5:30</span>
        </div>
        <div className="yt__top_right">
          {/* 전파상태 */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              width={19}
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </span>
          {/* 인터넷 상태 */}
          <span className="yt__top_lte">LTE</span>
          {/* 배터리 상태 */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              width={25}
            >
              <path d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" />
              <path
                fillRule="evenodd"
                d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* youtube 상단바 */}
      <div className="yt__top_2">
        <div className="yt__top_2_left">
          {/* youtube 아이콘 */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 yt__top_2_left_icon"
              width={18}
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>Premium</div>
        </div>
        <div className="yt__top_2_right">
          {/* 멀티 아이콘 */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={23}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </span>
          {/* 알림 아이콘 */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={23}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>
          {/* 검색 아이콘 */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={23}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <div className="yt__top_2_right_profile">종훈</div>
        </div>
      </div>

      {/* 탐색바 */}
      <div className="yt__top_3">
        <div className="yt__top_3_quest">
          <div className="yt__top_3_quest_icon">
            <IoCompassOutline />
          </div>
          <div style={{ marginLeft: "3px" }}>탐색</div>
        </div>
        <div className="yt__top_3_classification">
          <span className="yt__top_3_classification_button_all">전체</span>
          <span className="yt__top_3_classification_button_new">
            새로운 맞춤 동영상
          </span>
          <span>실시간</span>
          <span>음악</span>
        </div>
      </div>

      {/* 영상 */}
      <div className="yt__video">
        {/* 영상 미리보기 */}
        <img
          src="https://i.ytimg.com/an_webp/NbJiY-gmAdQ/mqdefault_6s.webp?du=3000&sqp=CLjgqZkG&rs=AOn4CLARmXmjFTqWwqJU3fPVOBSQKYMVcA"
          className="yt__video_img"
        ></img>
        {/* 영상 설명 */}
        <div className="yt__video_infor">
          <img
            src="https://yt3.ggpht.com/JKJa9vaTqiTzSTYtQxY8LWYWZN0TNaTqNRVSZjN72uqeNxvK5-9QAO8GMP65EmzBruGxiPuSFLA=s68-c-k-c0x00ffffff-no-rj"
            className="yt__video_infor_img"
          ></img>
          {/* 영상 제목 */}
          <span>
            <div className="yt__video_infor_title">
              평범할 수 없는 시대를 평범하게 살고 싶던 사람들[한국영화/결말포함]
            </div>
            <div className="yt__video_infor_profile">
              영화탐구생활 · 조회수 38만회 · 6일전
            </div>
          </span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={28}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* shorts */}
      <div className="yt__shorts">
        <div className="yt__shorts_shorts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={40}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          Shorts
        </div>
        <div className="yt__shorts_list">
          <span>
            <div className="yt__shorts_list_menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={28}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
            <div className="yt__shorts_list_infor">
              <div>[100분토론] 김영배 "이재명은 탄압, 김건희는 봐주기"</div>
              <div style={{ fontSize: 18 }}>조회수 11만회</div>
            </div>
          </span>
          <span>
            <div className="yt__shorts_list_menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={28}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
            <div className="yt__shorts_list_infor">
              <div>[100분토론] 김영배 "이재명은 탄압, 김건희는 봐주기"</div>
              <div style={{ fontSize: 18 }}>조회수 11만회</div>
            </div>
          </span>
        </div>
      </div>

      {/* 하단바 */}
      <div className="yt__bottom">
        {/* 홈 버튼 */}
        <span>
          <div className="yt__bottom_home_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="yt__bottom_home_text">홈</div>
        </span>
        {/* short 버튼 */}
        <span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </div>
          <div className="yt__bottom_short_text">short</div>
        </span>
        {/* + 버튼 */}
        <span className="yt__bottom_plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={45}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        {/* 구독 버튼 */}
        <span className="yt__bottom_gudok">
          <div className="yt__bottom_gudok_icon">
            <BsCollectionPlay />
          </div>
          <div className="yt__bottom_gudok_text">구독</div>
        </span>
        {/* 보관함 버튼 */}
        <span className="yt__bottom_inben">
          <div>
            <AiOutlinePlaySquare />
          </div>
          <div>보관함</div>
        </span>
      </div>
    </div>
  );
}

export default Youtube;
