<div align="center">
<h3>========================</h3>
<h3>:gear: :gear: MR for Rest-API ISSUE :gear: :gear:</h3>
<h3>========================</h3>
</div>

## Checklist Тайлбар
* :white_check_mark: Заавалчгүй шалгаж, implement хийсэн байх ёстой item  
* :warning: Заавалчгүй шалгаж, implement хийсэн байх ёстой item боловч зарим онцгой тохиолдлууд дээр check хийлгүй орхиж болно.

## Checklists

## Security болон Authorization
- [Authentication ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authentication)
  - [Authentication ашиглаж байгааг шалгах ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authentication-%D0%B0%D1%88%D0%B8%D0%B3%D0%BB%D0%B0%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
  - [Authentication(Token) expire хийж байгааг шалгах ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authentication-expire-%D0%B1%D0%BE%D0%BB%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
  - [Expire болсон authentication-ийг дахин ашиглаж болохгүй байх ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#expire-%D0%B1%D0%BE%D0%BB%D1%81%D0%BE%D0%BD-authentication-%D0%B8%D0%B9%D0%B3-%D0%B4%D0%B0%D1%85%D0%B8%D0%BD-%D0%B0%D1%88%D0%B8%D0%B3%D0%BB%D0%B0%D0%B6-%D0%B1%D0%BE%D0%BB%D0%BE%D1%85%D0%B3%D2%AF%D0%B9-%D0%B1%D0%B0%D0%B9%D1%85)
  - Ямар ч authentication-гүй request явуулахад зөвшөөрөхгүй байх 
  - [Өөр хүний authentication ашиглаж болохгүй байх ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#%D3%A9%D3%A9%D1%80-%D1%85%D2%AF%D0%BD%D0%B8%D0%B9-authentication-%D0%B0%D1%88%D0%B8%D0%B3%D0%BB%D0%B0%D0%B6-%D0%B1%D0%BE%D0%BB%D0%BE%D1%85%D0%B3%D2%AF%D0%B9-%D0%B1%D0%B0%D0%B9%D1%85)
  - [Алдаатай authentication ашиглаж хандах үед error handle хийж байгааг шалгах ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#%D0%B0%D0%BB%D0%B4%D0%B0%D0%B0%D1%82%D0%B0%D0%B9-authentication-%D0%B0%D1%88%D0%B8%D0%B3%D0%BB%D0%B0%D0%B6-%D1%85%D0%B0%D0%BD%D0%B4%D0%B0%D1%85-%D2%AF%D0%B5%D0%B4-error-handle-%D1%85%D0%B8%D0%B9%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
- [Authorization ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authorization)
  - [Authorization хийгдэж байгааг шалгах ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authorization-%D1%85%D0%B8%D0%B9%D0%B3%D0%B4%D1%8D%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
  - [Resource руу authorization хүрэхгүй үед request явуулахад зөвшөөрөхгүй байх ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authorization-%D1%85%D0%B8%D0%B9%D0%B3%D0%B4%D1%8D%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
  - [Өөрт хамааралгүй endpoint руу request явуулахад зөвшөөрөхгүй байх (user admin-ний endpoint руу хандах) ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#authorization-%D1%85%D0%B8%D0%B9%D0%B3%D0%B4%D1%8D%D0%B6-%D0%B1%D0%B0%D0%B9%D0%B3%D0%B0%D0%B0%D0%B3-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
- Security
  - [Header болон бусад unsafe param-уудыг encode хийсэн байх ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#header-%D0%B1%D0%BE%D0%BB%D0%BE%D0%BD-%D0%B1%D1%83%D1%81%D0%B0%D0%B4-sensitive-param-%D1%83%D1%83%D0%B4%D1%8B%D0%B3-encode-%D1%85%D0%B8%D0%B9%D1%81%D1%8D%D0%BD-%D0%B1%D0%B0%D0%B9%D1%85)

## Performance
 - API ийн response time, latency, [TTFB](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#time-to-first-byte)/[TTLB](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#time-to-last-byte-ttlb) ийг бүх орчин, нөхцөлд хүлээн зөвшөөрөгдөх хэмжээнд байгааг шалгаж үзэх
  - production тай ижил орчинд, under load системийн capacity limit-дээ хүрсэн үед
  - production тай ижил орчинд, no load буюу системийн capacity бага ачаалласан байх үед

## Status code
  - [HTTP status code зөв ашигласан байх ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#http-status-codes)
## Response
  - Зөв бүтэц, зохион байгуулалттай object ирэх
  - Request-тэй хамааралтай model-ийн дата буцаадаг байх
  - Sort, pagination, order гэх мэт филтерийн дата ирж байх
  - Хэрэглээгүй илүү attribute response-д буцааж байгаа эсэхийг шалгах
  - Error message-үүд front-end хөгжүүлэгчид ойлгомжтой байх
  - Error message зөв алдаа зааж байгааг шалгах
## Validate state
  - GET requests-ийн үед системийн state өөрчлөгдөх ёсгүй
  - POST, DELETE, PATCH, PUT
    - Дээрх request дээрх үйлдлүүд зөв хийгдэж байгааг доорх аргаар шалгах
      - Харгалзах Get request-ийг дуудаж state өөрчлөгдсөн байгааг харах
      - DB болон дата storage дээр зөв орсон байгааг шалгах
## Validate headers
  - Required болон spec-ийн дагуу header-үүд бүгд хэрэглэгдэж байгааг шалгах
    - content-type,
    - connection
    - cache-control
    - expires
    - access-control-allow-origin
    - keep-alive гэх мэт..

## Checklist

1. Basic positive + optional parameters – API call хийхдээ valid болон optional parameter явуулж checklist-ийг шалгах
	- API call хийхдээ valid required parameters явуулж chekclist-ийг шалгах
	- Өмнөхтэй ижил + valid optional parameters явуулж checklist-ийг шалгах (filter, sort, limit, skip гэх мэт)
    - [Versioning ашиглаж байвал хуучин болон шинэ endpoint-руу ижилхэн request явуулж үзэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#api-versioning)
  - [ ] Security болон Authorization :white_check_mark:
  - [ ] Performance :white_check_mark:
  - [ ] Status code :white_check_mark:
  - [ ] Response :white_check_mark:
  - [ ] Validate state :white_check_mark:
  - [ ] Validate headers :white_check_mark:
2. Negative testing – API call хийхдээ valid input явуулж checklist-ийг шалгах
	- API call хийхдээ valid input явуулж зөвшөөрөөгүй үйлдэл хийх гэж оролдох: Жишээ нь: 
      - Байгаа дататай ижил дата үүсгэх гэж үзэх (жишээ нь: Өмнө байгаа user-тэй ижил нэртэй)
	  - Байхгүй датаг устгах гэж үзэх (жишээ нь: Байхгүй id-тай user устгах)
	  - Буруу утгатай valid data явуулж update хийх гэж үзэх (жишээ нь: өмнө үүссэн байгаа нэртэй ижил нэрээр update хийх)
	  - Зөвшөөрөөгүй үйлдэл хийх гэж үзэх (жишээ нь: permission байхгүй мөртлөө user устгах)
  - [ ] Security болон Authorization :white_check_mark:
  - [ ] Performance :white_check_mark:
  - [ ] Status code :white_check_mark:
  - [ ] Response :white_check_mark:
  - [ ] Validate state :white_check_mark:
  - [ ] Validate headers :white_check_mark:
3. Negative testing – API call хийхдээ invalid input явуулж checklist-ийг шалгах
    - Authorization token буруу эсвэл явуулахгүй байх
    - Invalid value явуулах (date дээр string, int гэх мэт)
    - Invalid id эсвэл хоосон query parameters дээр явуулах
    - [Common ашигладаггүй char body/querystring param дээр ашиглаж request явуулж үзэх(4 byte char, emoji гэх мэт)](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#params)
    - Invalid model эсвэл nested дата буруу байх
    - [SQL injection-хийх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#sql-injection-%D1%8D%D1%8D%D1%81-%D1%85%D0%B0%D0%BC%D0%B3%D0%B0%D0%B0%D0%BB%D1%81%D0%B0%D0%BD-%D1%8D%D1%81%D1%8D%D1%85%D1%8D%D1%8D-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%85)
    - [Request body length-ээс давсан request явуулах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#request-body-length-%D1%8D%D1%8D%D1%81-%D0%B4%D0%B0%D0%B2%D1%81%D0%B0%D0%BD-request-%D1%8F%D0%B2%D1%83%D1%83%D0%BB%D0%B0%D1%85)
    - Body-гүй хоосон request явуулж үзэх
    - Invalid HTTP header явуулах
    - [Content-Type зөрүүлж request явуулах (json үед JS гэх мэт)](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#content-type)
    - Required Header-үүд хасаж явуулж үзэх
    - Байхгүй endpoint дуудах
  - [ ] Security болон Authorization :white_check_mark:
  - [ ] Performance :white_check_mark:
  - [ ] Status code :white_check_mark:
  - [ ] Response :white_check_mark:
  - [ ] Validate state :white_check_mark:
  - [ ] Validate headers :white_check_mark:
4. Destructive testing
	- API-ийн бат бөх байдлыг шалгахын тулд санаатайгаар алдаа гаргахыг оролдох:
    - Malformed (буруу хэлбэртэй) content-тэй request явуулах
    - Буруу content-type явуулах
    - Буруу бүтэцтэй content явуулах
	- Лимитээс хэтэрсэн утга бүхий parameter явуулах. Жишээ нь:
	  -Зөвшөөрсөн уртаас олон тэмдэгт явуулах 
	- invalid UUID-аар дата авахыг оролдох
	- Overflow payload – Лимитээс хэтэрсэн хэмжээ(body)-тэй JSON request явуулах
	- Захын (boundary) утгуудыг шалгах 
	  - Хоосон request явуулах
	  - Request дотор хоосон sub-object явуулах
	- request болон parameter-ээр зөвшөөрөөгүй тэмдэгтүүд явуулах
	- Буруу HTTP headers ашиглах (Жишээ нь: Буруу Content-Type явуулах)
    - [Request time out хийгдэж байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Rest-API#request-timeout)
	- Concurrency тест хийх – API call хийхдээ нэг ижил resource руу зэрэг хүсэлт явуулах (Жишээ: delete + patch request зэрэг явуулах)

  - [ ] Security болон Authorization :white_check_mark:
  - [ ] Performance :white_check_mark:
  - [ ] Status code :white_check_mark:
  - [ ] Response :white_check_mark:
  - [ ] Validate state :white_check_mark:
  - [ ] Validate headers :white_check_mark:
