
async function display(){
    let html=``
     await fetch("http://localhost:3000/salons")
      .then(res=>res.json())
      .then(data=>{
          data.forEach(element => {
              html+=`
              
          <div style="display:flex; flex-direction: column; justify-content:center; align-items:center;  " >

          <div class="bg-[#181A20] shadow-xl m-2 text-[#28C7A7] flex flex-col text-left w-[90vw] h-[100vh]">

          <div class="bg-[#181A20] " style ="font-size:25px;">
        <div class="flex justify-between items-center"> 

            <p class="text-xl">#Challenge</p>

            <div class="flex items-center justify-end gap-2">
<svg height="32" width="32" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#E1B530"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#E1B530;} </style> <g> <path class="st0" d="M326.27,86.016l57.667,15.304c1.504,0.307,2.726,1.536,3.072,3.049l15.203,57.667 c0.41,1.693,1.899,2.883,3.631,2.883c1.749,0,3.222-1.19,3.615-2.883l15.226-57.667c0.323-1.512,1.552-2.742,3.056-3.049 l57.675-15.304c1.686-0.316,2.884-1.82,2.884-3.553c0-1.749-1.198-3.222-2.884-3.56L427.74,63.606 c-1.504-0.322-2.733-1.536-3.056-3.048L409.458,2.891C409.064,1.213,407.591,0,405.843,0c-1.732,0-3.222,1.213-3.631,2.891 l-15.203,57.667c-0.346,1.512-1.567,2.726-3.072,3.048L326.27,78.903c-1.702,0.339-2.883,1.812-2.883,3.56 C323.387,84.196,324.569,85.701,326.27,86.016z"></path> <path class="st0" d="M385.253,326.53l-26.176-6.939c-0.685-0.158-1.244-0.694-1.394-1.386l-6.9-26.175 c-0.181-0.764-0.851-1.308-1.646-1.308c-0.78,0-1.457,0.544-1.646,1.308l-6.9,26.175c-0.158,0.693-0.709,1.228-1.394,1.386 l-26.167,6.939c-0.772,0.15-1.316,0.828-1.316,1.615c0,0.788,0.544,1.466,1.316,1.623l26.167,6.932 c0.685,0.141,1.236,0.709,1.394,1.402l6.9,26.159c0.189,0.764,0.866,1.308,1.646,1.308c0.796,0,1.465-0.544,1.646-1.308l6.9-26.159 c0.15-0.693,0.709-1.261,1.394-1.402l26.176-6.932c0.756-0.157,1.308-0.835,1.308-1.623 C386.56,327.357,386.009,326.68,385.253,326.53z"></path> <path class="st0" d="M37.841,140.075l41.204,10.917c1.086,0.229,1.946,1.104,2.205,2.19l10.854,41.204 c0.299,1.221,1.363,2.064,2.6,2.064c1.244,0,2.3-0.843,2.592-2.064l10.862-41.204c0.229-1.086,1.119-1.961,2.198-2.19 l41.212-10.917c1.205-0.252,2.063-1.339,2.063-2.568c0-1.229-0.858-2.284-2.063-2.536l-41.212-10.934 c-1.079-0.236-1.969-1.086-2.198-2.174L97.296,80.636c-0.292-1.198-1.347-2.048-2.592-2.048c-1.236,0-2.3,0.85-2.6,2.048 l-10.854,41.228c-0.26,1.087-1.119,1.937-2.205,2.174l-41.204,10.934c-1.229,0.252-2.072,1.307-2.072,2.536 C35.769,138.736,36.612,139.824,37.841,140.075z"></path> <path class="st0" d="M396.595,276.897c-7.877-9.216-19.133-17.392-33.012-24.245h0.016c-27.68-13.706-65.638-22.094-107.583-22.118 l-0.118,0.007v-0.007c-27.546,0.007-53.398,3.623-75.745,9.988c-22.347,6.365-41.156,15.439-54.705,26.467l0.023-0.016 c-9.05,7.357-15.706,15.565-19.4,24.49c-2.112,5.065-3.222,10.405-3.214,15.816c0,4.451,3.608,8.066,8.066,8.066 c4.459,0,8.066-3.615,8.066-8.066c0.008-3.253,0.623-6.348,1.985-9.657c2.355-5.734,7.168-12.051,14.659-18.117l0.023-0.016 c11.154-9.137,28.184-17.581,48.916-23.449c20.732-5.916,45.198-9.374,71.326-9.366h0.425c39.629,0.008,75.429,8.145,100.1,20.433 l0.024,0.008c12.382,6.097,21.937,13.264,27.884,20.259c2.994,3.506,5.12,6.948,6.483,10.248c1.702,4.12,6.412,6.074,10.532,4.372 c4.12-1.701,6.073-6.412,4.372-10.531C403.613,286.373,400.542,281.497,396.595,276.897z"></path> <path class="st0" d="M485.912,271.966c-3.403-8.208-8.058-15.84-13.675-22.89c-5.616-7.042-12.185-13.517-19.496-19.472 l-0.448-0.362l0.433,0.362c-21.961-17.849-50.862-31.492-84.338-41.07h-0.008c-33.508-9.523-71.735-14.84-112.38-14.84 c-30.972,0-60.527,3.088-87.67,8.767c-27.144,5.68-51.877,13.95-73.208,24.489l-0.016,0.008 c-21.307,10.571-39.424,23.442-52.87,39.14l0.244-0.3l-0.252,0.3c-6.711,7.862-12.256,16.487-16.14,25.868 c-3.891,9.389-6.057,19.511-6.05,29.932v81.873c-0.007,10.43,2.159,20.559,6.05,29.948c3.403,8.208,8.059,15.832,13.675,22.882 c5.624,7.05,12.185,13.517,19.494,19.472l0.016,0.008c21.961,17.833,50.853,31.507,84.33,41.069l0.18,0.04 C177.255,506.683,215.418,511.992,256,512h0.008c30.964-0.008,60.518-3.096,87.662-8.775c27.144-5.68,51.877-13.958,73.208-24.49 l0.015-0.015c21.307-10.572,39.416-23.45,52.87-39.133l0.008-0.015c6.711-7.846,12.248-16.462,16.132-25.852l-0.244,0.575 l0.252-0.575c3.883-9.39,6.05-19.519,6.05-29.948v-81.873C491.961,291.477,489.795,281.355,485.912,271.966z M72.838,426.409c-2.481-2.339-4.797-4.718-6.86-7.121c-4.892-5.734-8.563-11.602-11.013-17.51c-2.45-5.923-3.678-11.886-3.678-18.006v-37.116 c4.781,5.9,10.429,11.469,16.817,16.684c1.537,1.236,3.112,2.458,4.734,3.671V426.409z M118.083,454.932 c-3.111-1.355-6.175-2.742-9.114-4.206c-6.845-3.387-13.147-7.003-18.896-10.775v-61.676c8.578,4.923,17.951,9.436,28.01,13.501 V454.932z M174.111,472.505c-14.194-3.002-27.514-6.759-39.794-11.146h1.016v-63.29c3.946,1.307,7.995,2.544,12.122,3.726 c8.539,2.426,17.456,4.552,26.656,6.404V472.505z M247.375,480.657c-19.519-0.394-38.282-2.174-56.021-5.041v-64.401 c17.841,2.756,36.604,4.371,56.021,4.75V480.657z M322.804,475.23c-18.369,3.064-37.856,4.986-58.179,5.38v-64.607 c20.196-0.394,39.708-2.15,58.179-5.081V475.23z M378.833,460.965c-6.081,2.206-12.414,4.254-19.008,6.128 c-6.364,1.812-12.996,3.426-19.786,4.907v-64.228c13.651-2.82,26.632-6.333,38.794-10.437V460.965z M424.085,438.484 c-8.16,5.593-17.55,10.792-28.018,15.517v-63.125c5.041-2.088,9.933-4.278,14.604-6.585c4.671-2.324,9.137-4.758,13.414-7.279 V438.484z M460.713,383.771c0,6.12-1.228,12.084-3.686,18.006c-3.151,7.656-8.436,15.274-15.707,22.576v-58.242h-1.024 c7.152-5.459,13.493-11.28,18.826-17.51c0.543-0.638,1.063-1.284,1.59-1.93V383.771z M457.027,319.89 c-4.253,10.334-12.367,20.59-24.024,30.082c-17.448,14.241-42.756,26.593-73.177,35.233 c-30.412,8.665-65.922,13.667-103.825,13.667c-57.746,0.024-109.978-11.658-147.031-30.035 c-18.526-9.16-33.209-19.967-42.992-31.444c-4.892-5.727-8.563-11.595-11.013-17.502c-2.45-5.924-3.678-11.879-3.678-17.991 s1.228-12.067,3.678-17.991c4.27-10.342,12.367-20.598,24.033-30.074c17.456-14.25,42.756-26.608,73.177-35.249 c30.413-8.656,65.93-13.651,103.826-13.651c57.746-0.032,109.969,11.658,147.023,30.027c18.534,9.153,33.224,19.976,42.992,31.436 c4.899,5.727,8.57,11.595,11.012,17.51c2.458,5.924,3.686,11.878,3.686,17.991S459.485,313.966,457.027,319.89z"></path> </g> </g></svg>
            <input form="form${element._id}" class='input shrink w-1/12 text-xl  bg-[#181A20]' type="text" name="points" required disabled value="${element.points}">

            </div>
            
            </div>
        
          <form id="form${element._id}">
          <input class='bg-[#181A20] input ' type="text" name='name' flex-1 "  required disabled value="${element.name}">
          </form>
          
          </div>

          <input form="form${element._id}" class='input bg-[#181A20]' type="text" name="location" required disabled value="${element.location}">

          <input form="form${element._id}" class='input bg-[#181A20]' type="text" name="Description" required disabled value="${element.Description}">

          
          

          <div>
          <img class="w-[92vw] h-[65vh]" src= "${element.picturePath}">
          </div>

            
              <div scope="row" >
              <div class="flex mt-5  justify-between">
              <div class="flex">
              <button>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.85896 3.5H8.85796C5.45096 3.5 2.76796 5.4785 1.49646 8.9275C-1.39754 16.7825 9.10996 23.667 13.5965 26.606C14.319 27.079 15.1375 27.6155 15.2985 27.783L15.9255 28.5L16.624 27.854C16.74 27.752 17.2765 27.4085 17.795 27.0765C22.0975 24.3225 33.5245 17.006 30.496 8.9175C29.213 5.489 26.5255 3.5225 23.125 3.5225C20.253 3.5225 17.412 4.904 15.9685 6.7995C14.4775 4.875 11.6725 3.5 8.85896 3.5Z" fill="#28C7A7"/>
        </svg> </button>
        
        <span class="likes"></span>
        </div>

        <button class="btn m flex gap-2" id="likes">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9737 21.5714H21.4737H20.3198L19.4969 21.9488L19.4918 21.9512L19.4917 21.9511C18.3696 22.4503 17.1387 22.7108 15.8921 22.7143L15.8907 22.7143L7.23389 22.7143C6.85587 22.726 6.47988 22.6243 6.16439 22.4187C5.84559 22.2111 5.6026 21.9059 5.48644 21.5444L5.48592 21.5428L5.2388 20.7647L4.38533 20.3922C4.05304 20.2665 3.76344 20.0467 3.56356 19.755L3.97602 19.4724L3.56356 19.755C3.36002 19.458 3.26214 19.104 3.29154 18.7449L3.29367 18.719L3.29848 18.6934L3.46069 17.83L2.71411 17.1723L2.71354 17.1718C2.41852 16.9111 2.22348 16.5574 2.1755 16.1667C2.12781 15.7783 2.23031 15.3916 2.45639 15.0729L3.09102 14.1246L2.38933 13.1679C2.30047 13.0645 2.23151 12.9442 2.18847 12.8124C2.14218 12.6707 2.12758 12.5207 2.14633 12.3722C2.16508 12.2239 2.21638 12.0829 2.29472 11.9576L2.71864 12.2227L2.29472 11.9576C2.37122 11.8353 2.47144 11.7311 2.58732 11.6491C2.80027 11.4916 3.06257 11.4164 3.32324 11.4286H11.4973L10.0912 7.62182L10.0912 7.62162C9.7692 6.74873 9.60495 5.83331 9.60554 4.91113M21.9737 21.5714L10.1055 4.91145M21.9737 21.5714V21.0714V14.2143V13.7143H21.4737H21.199M21.9737 21.5714L21.0064 14.2143M9.60554 4.91113L10.1055 4.91145M9.60554 4.91113V4.91145H10.1055M9.60554 4.91113V3.64288V3.63579L9.60574 3.6287C9.61623 3.25889 9.78332 2.9179 10.0546 2.67243C10.3245 2.42826 10.6785 2.29429 11.0413 2.28587L11.0532 2.28559V2.28573C11.3446 2.28593 11.6327 2.36851 11.8773 2.52748L11.6049 2.94672M10.1055 4.91145V3.64288C10.1119 3.41737 10.2138 3.2027 10.3901 3.04319C10.5664 2.88368 10.8037 2.79152 11.0529 2.78573C11.251 2.78587 11.444 2.84217 11.6049 2.94672M11.6049 2.94672L11.8773 2.52748C12.1205 2.68555 12.3121 2.91403 12.4158 3.18748L13.096 4.88553L13.099 4.8932L13.1018 4.90098C13.6181 6.32454 14.4918 7.62596 15.6594 8.70216C15.6599 8.70268 15.6605 8.7032 15.6611 8.70372M11.6049 2.94672C11.7657 3.05127 11.8863 3.19881 11.9497 3.36859L12.6318 5.07144C13.1768 6.5742 14.0975 7.943 15.3223 9.07144L21.0064 14.2143M19.2885 21.4943L20.2106 21.0714L19.2885 21.4943ZM19.2885 21.4943C18.2311 21.9647 17.069 22.211 15.8907 22.2143L19.2885 21.4943ZM21.0064 14.2143L21.3418 13.8435L21.199 13.7143M21.0064 14.2143L15.6611 8.70372M21.199 13.7143L15.6611 8.70372M21.199 13.7143L15.6611 8.70372M21.7193 12.2993L21.8622 12.4286H22.0548H23.5V22.8571H20.8422H20.7312L20.6306 22.9041L20.2425 23.0854C18.9031 23.6852 17.4267 23.9988 15.9282 24H6.46772C5.87487 24 5.31513 23.7865 4.90966 23.4196C4.50585 23.0542 4.28988 22.5701 4.28988 22.0771V21.9171V21.4421L3.81549 21.4178C3.24515 21.3885 2.7181 21.1628 2.33969 20.7999C1.9634 20.439 1.76345 19.9722 1.76361 19.4976C1.76756 19.1943 1.85958 18.8937 2.03537 18.6257L2.37173 18.1129L1.80173 17.8867C1.39773 17.7264 1.06315 17.4645 0.834558 17.1413C0.606509 16.8189 0.49263 16.4484 0.50037 16.0761L0.500465 16.0761L0.500478 16.0664C0.500859 15.765 0.582257 15.4657 0.74124 15.1936C0.900456 14.9211 1.13382 14.6827 1.42539 14.5025L2.10475 14.0827L1.43039 13.6549C1.13778 13.4693 0.903755 13.2262 0.743815 12.9493C0.584284 12.6732 0.502021 12.37 0.500479 12.0646C0.500799 11.5721 0.716749 11.0884 1.12026 10.7233C1.52573 10.3564 2.08547 10.1429 2.67832 10.1429H8.70346H9.42052L9.17264 9.47002L8.63023 7.99777C8.63012 7.99745 8.63 7.99713 8.62988 7.99681C8.26761 6.99985 8.08203 5.95849 8.07928 4.91091V3.63255C8.08077 3.29314 8.156 2.95587 8.30233 2.63949C8.44887 2.32265 8.66454 2.0316 8.93972 1.78443C9.21498 1.53718 9.54403 1.3391 9.90915 1.20367C10.2743 1.06823 10.6668 0.998709 11.0639 1.00002L11.0645 1.00002C11.7 1.00126 12.3149 1.18289 12.8226 1.51375C13.3297 1.84421 13.7006 2.30408 13.8935 2.82236C13.8935 2.82252 13.8936 2.82268 13.8936 2.82284L14.5119 4.50088C14.5119 4.5009 14.5119 4.50091 14.5119 4.50093C14.974 5.75978 15.7521 6.89906 16.7802 7.83055L16.7805 7.83078L21.7193 12.2993Z" fill="#5E5E5E" stroke="#28C7A7"/>
            </svg>
            Like
        </button>

      
        <button class="btn flex gap-2">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0529 2H7.408C7.27258 2.00153 7.1377 2.01661 7.00555 2.045C6.79886 2.01698 6.59048 2.00195 6.38174 2C5.27637 1.99754 4.20978 2.39031 3.39051 3.10151C2.57124 3.8127 2.0582 4.79119 1.9517 5.84567C1.8452 6.90014 2.15289 7.95477 2.81462 8.80336C3.47635 9.65196 4.44454 10.2335 5.52988 10.4343V18.2C5.53165 18.6769 5.73009 19.1337 6.08192 19.4709C6.43375 19.8081 6.91043 19.9983 7.408 20H18.0529C18.2995 20 18.5438 19.9534 18.7716 19.863C18.9995 19.7725 19.2065 19.6399 19.3809 19.4728C19.5553 19.3056 19.6937 19.1072 19.7881 18.8888C19.8825 18.6704 19.931 18.4364 19.931 18.2V3.8C19.931 3.32261 19.7332 2.86477 19.3809 2.5272C19.0287 2.18964 18.551 2 18.0529 2ZM3.19565 6.25571C3.19565 5.65022 3.38307 5.05835 3.7342 4.555C4.08533 4.05165 4.58437 3.65944 5.16817 3.42803C5.75197 3.19661 6.39428 3.13639 7.0138 3.25499C7.63333 3.37358 8.20222 3.66565 8.64847 4.09425C9.09473 4.52284 9.39828 5.06868 9.52072 5.66268C9.64315 6.25669 9.57897 6.87215 9.33628 7.43118C9.0936 7.99021 8.68333 8.46767 8.15739 8.80313C7.63146 9.13859 7.0135 9.31698 6.38174 9.31571C5.96277 9.31571 5.54792 9.23651 5.16092 9.08265C4.77393 8.9288 4.4224 8.7033 4.12646 8.41906C3.83051 8.13483 3.59597 7.79745 3.43624 7.42623C3.27652 7.05502 3.19476 6.65725 3.19565 6.25571ZM18.6767 18.2C18.6767 18.3585 18.611 18.5106 18.494 18.6227C18.377 18.7349 18.2184 18.7978 18.0529 18.7978H7.408C7.24256 18.7978 7.08389 18.7349 6.9669 18.6227C6.84992 18.5106 6.7842 18.3585 6.7842 18.2V10.4857C7.63069 10.413 8.43754 10.1086 9.10866 9.60888C9.77978 9.10913 10.2869 8.43504 10.5696 7.6669C10.8523 6.89875 10.8987 6.06891 10.7033 5.2762C10.5078 4.4835 10.0788 3.76133 9.46722 3.19571H18.0529C18.2184 3.19571 18.377 3.2587 18.494 3.37082C18.611 3.48294 18.6767 3.63501 18.6767 3.79357V18.2Z" fill="#28C7A7"/>
                <path d="M8.38729 4.83501C8.32977 4.77825 8.26095 4.73312 8.18491 4.70231C8.10887 4.67149 8.02715 4.65561 7.94459 4.65561C7.86203 4.65561 7.78031 4.67149 7.70426 4.70231C7.62822 4.73312 7.5594 4.77825 7.50189 4.83501L5.86524 6.41001L5.26156 5.85715C5.20944 5.78697 5.14212 5.72841 5.0642 5.68548C4.98628 5.64255 4.8996 5.61627 4.81009 5.60843C4.72059 5.60059 4.63037 5.61138 4.54562 5.64006C4.46087 5.66874 4.38359 5.71464 4.31906 5.7746C4.25454 5.83457 4.2043 5.90719 4.17178 5.9875C4.13926 6.0678 4.12523 6.15389 4.13065 6.23987C4.13608 6.32586 4.16082 6.4097 4.20319 6.48567C4.24557 6.56163 4.30457 6.62793 4.37616 6.68001L5.42254 7.68287C5.48079 7.73829 5.54988 7.78215 5.62584 7.81193C5.70181 7.84172 5.78316 7.85684 5.86524 7.85644C6.03005 7.85269 6.18764 7.7909 6.30794 7.68287L8.38729 5.68358C8.44651 5.62846 8.4936 5.5625 8.52575 5.48962C8.5579 5.41674 8.57447 5.33842 8.57447 5.2593C8.57447 5.18017 8.5579 5.10185 8.52575 5.02897C8.4936 4.95609 8.44651 4.89014 8.38729 4.83501Z" fill="#28C7A7"/>
            </svg>
            Accept Challenge
        </button>
        <button class="btn flex gap-2">
            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5C0.94772 0.5 0.5 0.94772 0.5 1.5V21.5C0.5 22.0523 0.94772 22.5 1.5 22.5C2.05228 22.5 2.5 22.0523 2.5 21.5V13.0983C2.96602 12.8663 3.70273 12.5429 4.49251 12.3455C5.90911 11.9914 7.04598 12.1221 7.668 13.055C8.829 14.7964 11.0462 14.9498 12.7526 14.7798C14.5533 14.6004 16.3348 14.0107 17.2354 13.6776C18.0267 13.385 18.5 12.6336 18.5 11.8408V5.22337C18.5 3.67197 16.8578 2.76624 15.5489 3.35981C14.4875 3.84118 13.0774 4.37875 11.8031 4.5563C10.4699 4.74207 9.6956 4.4907 9.332 3.94544C8.0201 1.97763 5.77558 1.74466 4.16694 1.87871C3.5494 1.93018 2.97559 2.03816 2.5 2.15249V1.5C2.5 0.94772 2.05228 0.5 1.5 0.5ZM2.5 4.22107V10.9047C2.94083 10.7247 3.45616 10.543 4.00747 10.4052C5.59087 10.0094 7.954 9.8787 9.332 11.9455C9.8106 12.6634 10.9135 12.9531 12.5543 12.7897C14.0758 12.6381 15.6422 12.1321 16.5 11.8172V5.22337C16.5 5.17794 16.4081 5.16623 16.375 5.18126C15.2575 5.68804 13.6396 6.31972 12.0791 6.53716C10.5776 6.74639 8.7104 6.6185 7.668 5.05488C6.97989 4.02284 5.7244 3.75586 4.33304 3.8718C3.62405 3.93089 2.96427 4.08626 2.5 4.22107Z" fill="#28C7A7"/>
            </svg>
            Report
        </button>
    </div>


              </div>

          </div>
          </div>
          
          `  
          });
          
      })
      let body=document.getElementById('body')
      if (body){
        body.innerHTML=html
      }
      
      
      let del = body.querySelectorAll('.delete-btn')
      let update = body.querySelectorAll('.update-btn')
      
      
    if (del){
      del.forEach(btn=>{
      btn.addEventListener('click',deleteRow)
       
      } )
    }
    if (update){
      update.forEach(btn=>{
      btn.addEventListener('click',updateRow)
       
      } )
    }
}
display()
function updateRow(){

    let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    const id =this.parentElement.parentElement.childNodes[1].id
    tableData.forEach(element=>{
        element.disabled=false
    })
    this.parentElement.innerHTML=`<button style = "background-color: aqua; padding: 5px; color:white; font-size:25px;  border-radius:8px" type='submit' form="form${id}" class="save-btn">save</button>`
   
    let save = body.querySelectorAll('.save-btn')
    if (save){
        save.forEach(btn=>{

        btn.addEventListener('click',saveRow)
        
        } )
}

}
// eslint-disable-next-line @typescript-eslint/no-empty-function
function doThis(){

}
async function saveRow(e){
    e.preventDefault()
    const form=this.parentElement.parentElement.querySelector('form')

    const id =this.parentElement.parentElement.childNodes[1].id

    const formData= new FormData(form)

    let data={}
    for (let [key,val] of formData){

        data[key]=val
    }
   
    


    await fetch(`http://localhost:3000/salons/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(res=>res.json())
    .then(data=>{

        let tableData=this.parentElement.parentElement.querySelectorAll('.input')
        let dataValue=[]
        for (let key in data){
            dataValue.push(data[key])
        }
        let i=1
        for (; i< dataValue.length-2;i++){
            tableData[i-1].value=dataValue[i]

        }
        this.parentElement.parentElement.querySelector('a').href=dataValue[i]
        tableData.forEach(element=>{
            element.disabled=true
        })
    
    })
    .catch(err=>console.log(err))

    this.parentElement.innerHTML=`<button style = "background-color: #2E8BC0; padding: 5px; color:white; font-size:25px;  border-radius:8px" class="update-btn" class="update-btn">update</button>`

    let update = body.querySelectorAll('.update-btn')
    if (update){
        update.forEach(btn=>{
        btn.addEventListener('click',updateRow)
        
        } )
    }

}
async function deleteRow(){
const id =this.parentElement.id
await fetch(`http://localhost:3000/salons/${id}`,{method:'DELETE'})
.then(res=>res.json())
display()

}
const Salon= document.getElementById('form')
Salon.addEventListener('submit',addSalon)
 



async function addSalon(e){
    e.preventDefault()
    const formData=new FormData(Salon)
    let responseFetch;
   try{
        responseFetch=await fetch("http://localhost:3000/salons",{
           method:'POST',
           body: formData
      
       })
   
   }catch(e){
       document.querySelector('error').innerHTML=error.message
   }
   if (responseFetch?.ok){
       responseFetch
       .then(res=> res.json())
       .then(data=>console.log("success",data))
   
   }else{
       if (responseFetch?.status==400){
           document.querySelector('.error').textContent=`allowed files are png, jpeg jpg or gif`
       }
   }
   
   }
   
function redirect(){
    window.location.href = '';
  }

 
