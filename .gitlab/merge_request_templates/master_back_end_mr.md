<div align="center">
<h3>========================</h3>
<h3>:gear: :gear: MR for Rest-API ISSUE :gear: :gear:</h3>
<h3>========================</h3>
</div>

## Checklist Тайлбар
* :white_check_mark: Заавалчгүй шалгаж, implement хийсэн байх ёстой item  
* :warning: Заавалчгүй шалгаж, implement хийсэн байх ёстой item боловч зарим онцгой тохиолдлууд дээр check хийлгүй орхиж болно.

## Checklists

- Logging
  - [ ] [Logging level оруулсан эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#logging-level) :warning:
  - [ ] [Request, responce application logging оруулсан эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#logging-level) :warning:
  - [ ] [Log Rotation хийсэн эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#log-rotation-purge) :warning:
  - [ ] [Log purge хийсэн эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#log-rotation-purge) :warning:
  - [ ] [Нууц мэдээлэлийг лог дээр оруулахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#no-sensitive-information-in-log) :white_check_mark:
- DB
  - [ ] [Data model-ийг framework-д тохируулан ашиглах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#no-raw-sql) :warning:
  - [ ] [Timestamp хадгалахдаа ](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#timestamp-utc) :warning:
  - [ ] [Persist, Flush-ийг зөв ашиглаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#commit-transactions) :warning:
  - [ ] [Нууц мэдээлэлийг encrypt хийлгүйгээр DB дээр хадгалахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#logging-level) :white_check_mark:
  - [ ] [DB alter хийх эрхийг хязгаарлах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#db-user-privileges) :white_check_mark:
- Envionment
  - [ ] [Хөгжүүлэлтийн орчинууд руу солих хувьсагчууд ашиглах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#environment-variables) :warning:
  - [ ] [Хөгжүүлэлтийн орчинд тохирон ажиллах хувьсагч байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#environment-variables) :white_check_mark:
  - [ ] [Үйлдэлийн системийн онцлогоос хамааран асуудалгүй ажиллах эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#os-characteristics) :white_check_mark:
  - [ ] [*.lock файлуудыг кодод оруулан авч явах](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#lock-files-in-git) :white_check_mark:
- Email
  - [ ] Илгээх хугацааг хоцроож spam болохоос сэргийлэх
  - [ ] Spam болох үг Subject дээр оруулахгүй байх
- Security
  - [ ] [Credential-ийг encrypt хийлгүйгээр public network-өөр явуулахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#ssl) :white_check_mark:
  - [ ] [Нууцлалын мэдээлэлийг код дээр хадгалахгүй байх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#no-sensitive-information-in-git) :white_check_mark:
  - [ ] [Хандах эсвэл өөрчлөх эрхгүй мэдээлэл эсэхийг шалгаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#data-permission) :white_check_mark:
  - [ ] XSS шалгаж байгаа эсэх :white_check_mark:
  - [ ] CORS шалгаж байгаа эсэх :warning:
  - [ ] [SQL injection байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#no-raw-sql) :white_check_mark:
  - [ ] Logout, session timeout үед session-д хамааралтай мэдээлэл устаж байгаа эсэх :white_check_mark:
  - [ ] [Олон сервертэй үед replication хийгдэж чадаж байгаа эсэх](https://gitlab.unimedia.mn/ums-example-group/ums-example-project/-/wikis/Backend-release-MR-checklist-wiki#session-replication) :white_check_mark:

> **Note**  
 :white_check_mark: Заавалчгүй шалгаж, implement хийсэн байх ёстой item  
 :warning: Заавалчгүй шалгаж, implement хийсэн байх ёстой item боловч зарим онцгой тохиулдлууд дээр check хийлгүй орхиж болно.
