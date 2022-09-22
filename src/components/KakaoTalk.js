function KakaoTalk() {
  return (
    <>
      <div className="border-black border-2 bg-black text-white p-5 max-w-[1000px]  relative">
        {/* 상단바 */}
        <div className="flex justify-between mb-10">
          <div className="font-bold text-3xl">더보기</div>
          <div className="flex space-x-8">
            {/* 돋보기 아이콘 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            {/* 코드 스캔 아이콘 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
            </div>
            {/* 음악 아이콘 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            </div>
            {/* 옵션 아이콘 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 프로필 */}
        <div className="flex space-x-5 items-center mb-7">
          {/* 프로필 사진 */}
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z"
            className=" rounded-full w-20 "
          ></img>
          {/* 이름, email */}
          <div className="w-[65%]">
            <div className=" text-2xl font-bold">박종훈</div>
            <div className="text-gray-500">qkrwhdgns@home.go</div>
          </div>
          {/* 우측 버튼 */}
          <div className=" flex space-x-3 items-center absolute right-6">
            <div className="border-2 border-gray-300 flex justify-center rounded-full text-xl w-[70px] h-[45px] items-center hover:bg-white hover:text-black ">
              MY
            </div>
            <div className="border-2 border-gray-300 flex justify-center rounded-full text-xl w-[80px] h-[45px] items-center hover:bg-white hover:text-black ">
              🐱‍🐉10
            </div>
          </div>
        </div>

        {/* pay */}
        <div className=" flex items-center p-4 bg-gray-200 text-black rounded-lg justify-between mb-10">
          {/* pay */}
          <div className="flex items-center justify-center space-x-3 bg-white px-3 py-1 rounded-full">
            <div className="font-bold text-xl flex items-center space-x-1">
              <img
                src="data:image/jpeg;base64,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"
                className="h-[20px]"
              ></img>
              <div className=" relative -top-1">pay</div>
            </div>
            <div className="text-lg">99,999,999,999 원</div>
          </div>
          {/* 송금, 결제 */}
          <div className="flex space-x-5 text-xl font-bold">
            <div className="hover:bg-gray-400 rounded-full px-2">송금</div>
            <div className="hover:bg-gray-400 rounded-full px-2">결제</div>
          </div>
        </div>

        {/* 아이콘 */}
        <div>
          <div className="flex justify-around py-5">
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">😎</div>
              <div>이모티콘</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">📄</div>
              <div>페이지</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">🎰</div>
              <div>게임</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">💡</div>
              <div>메이커스</div>
            </div>
          </div>
          <div className="flex justify-around py-5">
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">😎</div>
              <div>이모티콘</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">📄</div>
              <div>페이지</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">🎰</div>
              <div>게임</div>
            </div>
            <div className="flex items-center flex-col w-full hover:bg-gray-800">
              <div className=" text-5xl mb-4">💡</div>
              <div>메이커스</div>
            </div>
          </div>
        </div>

        {/* 메일만들기.캘린더 일정 만들기 */}
        <div className="flex justify-around h-20 mb-10 border-t-[1px]">
          <div className="flex items-center space-x-2 text-lg h-full w-full justify-center hover:bg-gray-900">
            <div className="font-bold">✉ 메일</div>
            <div>만들기</div>
          </div>
          <div className="flex items-center space-x-2 text-lg h-full w-full justify-center hover:bg-gray-900">
            <div className="font-bold">📆 캘린더</div>
            <div>일정 만들기</div>
          </div>
        </div>

        {/* 광고 */}
        <div className="relative">
          <img
            src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1624030209/661301_2SHA0_9014_001_100_0000_Light-.jpg"
            className=" w-[100%] h-[300px] rounded-lg"
          ></img>
          <div className=" absolute top-5 left-5 text-4xl font-bold">P-31</div>
          <div className=" absolute bottom-5 left-3 text-lg font-bold">
            오버솔 블랙라벨 화이트 스니커츠 7CM
          </div>
          <div className=" border-solid border-gray-500 border-[1px] absolute bottom-5 right-2 p-1">
            알아보기
          </div>
        </div>
      </div>

      {/* 하단바 */}
      <div className="flex justify-around bg-gray-900 h-20 text-white text-3xl  max-w-[1000px]">
        <div className=" hover:bg-gray-400 flex justify-center items-center  h-full w-full">
          🙋‍♀️
        </div>
        <div className=" hover:bg-gray-400 flex justify-center items-center  h-full w-full">
          📮
        </div>
        <div className=" hover:bg-gray-400 flex justify-center items-center  h-full w-full">
          #
        </div>
        <div className=" hover:bg-gray-400 flex justify-center items-center  h-full w-full">
          ···
        </div>
      </div>
    </>
  );
}

export default KakaoTalk;
