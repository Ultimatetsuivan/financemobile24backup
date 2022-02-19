<div align="center">
<h3>========================</h3>
<h3>:gear: :gear: MR for Front-End ISSUE :gear: :gear:</h3>
<h3>========================</h3>
</div>

## Checklist Тайлбар
* :white_check_mark: Заавалчгүй шалгаж, implement хийсэн байх ёстой item  
* :warning: Заавалчгүй шалгаж, implement хийсэн байх ёстой item боловч зарим онцгой тохиулдлууд дээр check хийлгүй орхиж болно.

## Checklists

- Logging
  - [ ] [Нууц мэдээлэлийг лог дээр оруулахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#no-sensitive-information-in-log)  :white_check_mark:
- DB
  - [ ] [Data model-ийг framework-д тохируулан ашиглах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#no-raw-sql)  :warning:
  - [ ] [Timestamp хадгалахдаа ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#timestamp-utc)  :warning:
  - [ ] [Transaction зөв ашиглаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#commit-transactions)  :white_check_mark:
  - [ ] [Persist, Flush-ийг зөв ашиглаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#commit-transactions)  :white_check_mark:
  - [ ] [Нууц мэдээлэлийг encrypt хийлгүйгээр DB дээр хадгалахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#no-sensitive-information-in-log)  :white_check_mark:
  - [ ] [DB alter хийх эрхийг хязгаарлах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#db-user-privileges)  :white_check_mark:
- Envionment
  - [ ] [Хөгжүүлэлтийн орчинд тохирон ажиллах хувьсагч байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#environment-variables)  :white_check_mark:
  - [ ] [Үйлдэлийн системийн онцлогоос хамааран асуудалгүй ажиллах эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#os-characteristics)  :white_check_mark:
- Temporary file storage
  - [ ] [Системийн temp хавтасанд хадгалах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#temporary-file-storage-1)  :warning:
  - [ ] [Temporary file-ийг хэрэггүй болсон үед нь устгаж байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#temporary-file-storage-1)  :warning:
  - [ ] [Temporary file-ийн нэрийг давхацахгүйгээр үүсгэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#temporary-file-storage-1)  :white_check_mark:
  - [ ] [Template file дээр өгөгдөл өөрчлөлгүй заавал хуулбар дээр ажиллах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#temporary-file-storage-1)  :warning:
- Email
  - [ ] Илгээх хугацааг хоцроож spam болохоос сэргийлэх  :warning:
  - [ ] Spam болох үг Subject дээр оруулахгүй байх  :warning:
- Security
  - [ ] [Нууцлалын мэдээлэлийг код дээр хадгалахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#no-sensitive-information-in-git)  :white_check_mark:
  - [ ] [Global variable зөв ашиглаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#global-variable)  :warning:
  - [ ] Current user (session) мэдээлэл ил аваагүй :warning:
  - [ ] [Хандах эсвэл өөрчлөх эрхгүй мэдээлэл эсэхийг шалгаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#data-permission)  :white_check_mark:
  - [ ] Өгөгдөл авах үед зөвхөн POST, PUT ашиглах  :warning:
  - [ ] Front-оос ирж байгаа мэдээлэлийг Strong Parameter ашиглан авч байгаа эсэх  :warning:
  - [ ] [SQL injection байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/back-end#no-raw-sql)  :white_check_mark:

> **Note**  
 :white_check_mark: Заавалчгүй шалгаж, implement хийсэн байх ёстой item  
 :warning: Заавалчгүй шалгаж, implement хийсэн байх ёстой item боловч зарим онцгой тохиулдлууд дээр check хийлгүй орхиж болно.
