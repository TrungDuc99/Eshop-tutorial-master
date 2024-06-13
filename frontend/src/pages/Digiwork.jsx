import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
const dataConstant = {
  "code": 200,
  "success": true,
  "message": "SUCCESS",
  "data": {
    "totalRecord": 13,
    "totalPage": null,
    "columns": [
      {
        "id": "9a877975-785b-41f1-a701-891af60bbe8c",
        "settingId": "9230458f-1d69-427f-ba3a-7026f546a0ef",
        "title": "NEW",
        "settingCode": "S001",
        "color": "b7cfea",
        "index": 216,
        "cards": [
          {
            "id": "c349d80d-f4ec-4f2d-9158-7373f2bbed33",
            "title": "[BE] - Liệt kê các tính năng cần review lại",
            "index": 11047,
            "taskCode": 11047,
            "createdDate": "2024-05-10T08:52:55+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "6d11132f-b056-48ce-8877-bbba70fb0b9d",
            "title": "[BE] - Liệt kê cách tính năng, module cần được đánh giá lại",
            "index": 11045,
            "taskCode": 11045,
            "createdDate": "2024-05-10T08:50:25+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 1
          },
          {
            "id": "e0a8626f-e8ff-4fe5-bead-ad1ed2b0343d",
            "title": "[BE] - Deploy/build các tính năng của hệ thống LiA (AppC, AppB, Web)",
            "index": 8000,
            "taskCode": 8000,
            "createdDate": "2024-02-26T14:03:03+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 39
          }
        ],
        "cardsQty": 3
      },
      {
        "id": "5ef9162d-40a8-489d-b41f-e5066a139515",
        "settingId": "3adb6729-ba6a-4d06-a19e-01abdabbd78d",
        "title": "ACTIVE",
        "settingCode": "S025",
        "color": "f5a623",
        "index": 217,
        "cards": [],
        "cardsQty": 0
      },
      {
        "id": "454597cd-d0d0-4e4e-a6fb-1d8a423f694d",
        "settingId": "77f9c095-2a35-47ee-bad2-1e27e22fef31",
        "title": "IN PROGRESS",
        "settingCode": "S002",
        "color": "eee79e",
        "index": 218,
        "cards": [
          {
            "id": "730b5062-db82-4ece-a63a-f310669dd7ad",
            "title": "[BE] - Build môi trường [PRODUCTION] version [16] ngày 11/06/2024",
            "index": 12874,
            "taskCode": 12874,
            "createdDate": "2024-06-11T15:53:33+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "af01ef0a-dc0e-4644-8400-15bb24e2d083",
            "title": "[BE] - Xử lý socket rời phòng tham gia vào phòng chat",
            "index": 12817,
            "taskCode": 12817,
            "createdDate": "2024-06-11T07:52:11+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 2
      },
      {
        "id": "9e6481ed-6e0e-4404-952d-7e812d89d2aa",
        "settingId": "14c05f20-2cbe-4919-a231-63d27e2db6cb",
        "title": "CODE REVIEW",
        "settingCode": "S011",
        "color": "b8e986",
        "index": 219,
        "cards": [
          {
            "id": "b7f5d41f-ce00-46fd-a15d-86eeb3edd9b9",
            "title": "[BE] - Thêm API upload video sẽ có thêm hình thumbnail",
            "index": 11790,
            "taskCode": 11790,
            "createdDate": "2024-05-24T06:57:29+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "61f01001-6e90-4ca6-9918-61ca23660b93",
            "title": "[BE] - Thêm API upload sẽ có thêm hình thumbnail",
            "index": 11789,
            "taskCode": 11789,
            "createdDate": "2024-05-24T06:56:47+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 2
      },
      {
        "id": "c4646600-f0b6-4e29-8cdd-4eff896be925",
        "settingId": "240944d6-5daa-4bcd-99d0-06ebaf8f66d4",
        "title": "READY TO BUILD",
        "settingCode": "S010",
        "color": "6c9acf",
        "index": 224,
        "cards": [
          {
            "id": "6453a91b-f07c-4e75-ad98-43a51fedeabf",
            "title": "[BE] - Thêm message lỗi khi gọi đơn tư vấn tiếp theo nhưng trống đơn",
            "index": 12099,
            "taskCode": 12099,
            "createdDate": "2024-05-30T16:54:05+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 1
      },
      {
        "id": "120a1f96-0bb5-4427-bc1e-6dfcc1544312",
        "settingId": "e781e84c-aa80-47ca-9359-3cda87efff22",
        "title": "READY TO TEST",
        "settingCode": "S004",
        "color": "e5cd9c",
        "index": 231,
        "cards": [],
        "cardsQty": 0
      },
      {
        "id": "948089ec-86d7-4365-a6c6-fe96047d813d",
        "settingId": "13ab46e8-b5bb-4184-83fb-f4f2af26f300",
        "title": "Test Failed",
        "settingCode": "S026",
        "color": "d0021b",
        "index": 232,
        "cards": [],
        "cardsQty": 0
      },
      {
        "id": "3b9e813f-059a-4943-92bb-4e8fc16f67f5",
        "settingId": "db9904f9-1e5a-4d83-81da-72ca5dce6d25",
        "title": "DONE",
        "settingCode": "S003",
        "color": "acc88d",
        "index": 238,
        "cards": [
          {
            "id": "9c3710ae-640a-4936-9b21-b8608e229b7d",
            "title": "[BE] - Thêm API get danh sách tin nhắn của cuộc trò truyện",
            "index": 12852,
            "taskCode": 12852,
            "createdDate": "2024-06-11T11:29:19+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "817f831f-3110-46a8-a755-e8d5009fe351",
            "title": "[BE] - Build môi trường [PRODUCTION] cho tính năng gương thần 11/06/2024",
            "index": 12832,
            "taskCode": 12832,
            "createdDate": "2024-06-11T08:45:48+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "d320c3b8-a0ba-41f2-af82-58ebc4923f3e",
            "title": "[BE] - Update API get conversations had partner chat group   ",
            "index": 12779,
            "taskCode": 12779,
            "createdDate": "2024-06-10T13:32:56+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "b9e7f2f7-38f5-4afb-972f-52f9981fe0bf",
            "title": "[BE] - Xử lý count tin nhắn đã xem của tin nhắn giữa KH vs KH",
            "index": 12601,
            "taskCode": 12601,
            "createdDate": "2024-06-08T08:36:42+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "3c9fb9b1-7ac8-4dab-8675-6761062a7eab",
            "title": "[BE] - Xử lý socket cho tin nhắn đã xem",
            "index": 12569,
            "taskCode": 12569,
            "createdDate": "2024-06-07T15:12:27+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },

          {
            "id": "d889962d-d415-4039-81ec-000b6701b799",
            "title": "[BE] - Document (class diagram, flow chart) cho feature Booking order payment ",
            "index": 7358,
            "taskCode": 7358,
            "createdDate": "2024-02-16T13:34:01+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 3
      },
      {
        "id": "bb791f34-cc45-4ea4-bbfc-f431fe79ea4e",
        "settingId": "a5b1b581-679f-4e58-8ba6-ac3da1c16b0a",
        "title": "RESPONDED",
        "settingCode": "S009",
        "color": "50e3c2",
        "index": 337,
        "cards": [],
        "cardsQty": 0
      },
      {
        "id": "2364e255-bc3f-47cf-bfe1-df914de2695d",
        "settingId": "6b67b219-1ab9-4b22-812b-71e66a6b7288",
        "title": "ON HOLD",
        "settingCode": "S005",
        "color": "ddc2e3",
        "index": 376,
        "cards": [
          {
            "id": "96f4abd5-39e2-485e-87f8-c402e8a318ce",
            "title": "[AppC][OTP_SMS] - Không gửi mã xác thực OTP qua số điện thoại thuộc nhà mạng MobiPhone",
            "index": 12083,
            "taskCode": 12083,
            "createdDate": "2024-05-30T11:18:50+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "354800f1-57b4-434c-8f3a-9811ff785e1f",
              "settingCode": "I002",
              "color": "",
              "title": "BUG"
            },
            "subcardsCount": 0
          },
          {
            "id": "803be595-aac5-4859-8ef8-8bb03ea8e72d",
            "title": "[BE] - Tạo temple mẫu cho mail",
            "index": 10100,
            "taskCode": 10100,
            "createdDate": "2024-04-15T08:06:13+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "8f55e5b5-fed3-4aeb-9ab4-8e4dff918301",
            "title": "[BE] - Cấu hình BE để xử lý gửi mail",
            "index": 10099,
            "taskCode": 10099,
            "createdDate": "2024-04-15T08:05:54+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "9956cc84-7ae0-4bbc-88c9-bfd4a3cd01ba",
            "title": "[BE] - handle gửi mail",
            "index": 10098,
            "taskCode": 10098,
            "createdDate": "2024-04-15T08:05:20+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 2
          },
          {
            "id": "0334d38b-f9ba-4e5c-bac2-3a1abf53d3b4",
            "title": "[BE] - Handle gửi thông báo qua ZNS, Email, SMS",
            "index": 10032,
            "taskCode": 10032,
            "createdDate": "2024-04-12T08:41:39+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 7
          },
          {
            "id": "907a3d68-f08c-47f4-82ac-520ef530ed90",
            "title": "[BE] - Tích hợp code upload file, để đây file  sang một server lưu trữ khác sử dụng form data ",
            "index": 7154,
            "taskCode": 7154,
            "createdDate": "2024-02-02T14:16:58+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 1
          },
          {
            "id": "d69cfc20-46ef-48d0-8f88-7f5e3f143a6c",
            "title": "[BE] - Đánh giá những phần thay đổi hoặc thay thế toàn bộ của code api upload, và sau khi thay đổi nó sẽ ảnh hưởng như thế nào",
            "index": 7153,
            "taskCode": 7153,
            "createdDate": "2024-02-02T14:13:10+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 0
          },
          {
            "id": "702b5060-14a8-40bc-8790-5b367d1128ce",
            "title": "[BE] - Thêm server path vào field \"link\" để đổi link cũ chỉ có file path thành full link",
            "index": 7152,
            "taskCode": 7152,
            "createdDate": "2024-02-02T14:10:40+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 0
          },
          {
            "id": "e5ed2296-2bc8-4e00-a7f0-0085a6265086",
            "title": "[BE] - List ra file trả về sẽ bao gôm những thông tin nào, field nào, và FE sẽ cần lấy field nào để hiện thị hình",
            "index": 7150,
            "taskCode": 7150,
            "createdDate": "2024-02-02T14:09:34+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 0
          },
          {
            "id": "5a698ea7-7851-43ee-9529-7aeb531cb221",
            "title": "[BE] - List ra các table ảnh hưởng và đến luồng upload mới ",
            "index": 7149,
            "taskCode": 7149,
            "createdDate": "2024-02-02T14:09:08+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 0
          },
          {
            "id": "0b9eb652-89c3-4204-9a6a-b168758802a2",
            "title": "[BE] - Tìm giải pháp cho phần lưu trữ file trên server cloud storage",
            "index": 6936,
            "taskCode": 6936,
            "createdDate": "2024-01-30T09:11:02+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "92d82386-80c5-43bd-9050-cf750a957063",
              "settingCode": "I004",
              "color": "",
              "title": "US"
            },
            "subcardsCount": 1
          },
          {
            "id": "13480d8c-646f-4271-af90-04b1e223b3c5",
            "title": "[F21.2 Cấu hình quỹ thiện nguyện] - Khi không nhập số vào trường thứ tự, nội dung của error popup hiện ra \"OrderNumber là bắt buộc\"",
            "index": 5290,
            "taskCode": 5290,
            "createdDate": "2023-12-27T15:29:17+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "354800f1-57b4-434c-8f3a-9811ff785e1f",
              "settingCode": "I002",
              "color": "",
              "title": "BUG"
            },
            "subcardsCount": 0
          },
          {
            "id": "38f86326-6a69-46c9-b652-3705da4fe62c",
            "title": "[F21.2 Cấu hình quỹ thiện nguyện] - Chiến dịch vẫn được lưu thành công sau khi sửa chiến dich bằng cách xoá field : Hướng đến, Địa điểm...",
            "index": 5287,
            "taskCode": 5287,
            "createdDate": "2023-12-27T15:02:28+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "354800f1-57b4-434c-8f3a-9811ff785e1f",
              "settingCode": "I002",
              "color": "",
              "title": "BUG"
            },
            "subcardsCount": 0
          },
          {
            "id": "b46f7dde-0383-4a36-8846-f32fee2843da",
            "title": "[F21.2 Cấu hình quỹ thiện nguyện] - Sau khi thêm một chiến dịch với data sai format vào field ngày, nội dung của error popup bị sai",
            "index": 5284,
            "taskCode": 5284,
            "createdDate": "2023-12-27T14:59:31+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "354800f1-57b4-434c-8f3a-9811ff785e1f",
              "settingCode": "I002",
              "color": "",
              "title": "BUG"
            },
            "subcardsCount": 0
          },
          {
            "id": "5a73505b-fcd6-40fb-9bfd-94dfd35e8f07",
            "title": "[F21.2 Cấu hình quỹ thiện nguyện] - Chiến dịch vẫn được thêm mới thành công khi không upload avatar ",
            "index": 5279,
            "taskCode": 5279,
            "createdDate": "2023-12-27T14:51:05+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "354800f1-57b4-434c-8f3a-9811ff785e1f",
              "settingCode": "I002",
              "color": "",
              "title": "BUG"
            },
            "subcardsCount": 0
          },
          {
            "id": "9ddfab54-d7be-4a21-ab83-55f3e052e87d",
            "title": "[BE] Thêm api chi quỹ thiện nguyện",
            "index": 5065,
            "taskCode": 5065,
            "createdDate": "2023-12-21T08:59:22+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "dcd0d280-bfc6-4161-a614-bd8904fd8ce3",
            "title": "[BE] Thêm API danh sách đồng hành",
            "index": 5064,
            "taskCode": 5064,
            "createdDate": "2023-12-21T08:58:41+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "dc8a9485-8fbf-41f9-8bf1-1580d6b0f7dc",
            "title": "[BE] Thêm API danh sách ủng hộ",
            "index": 5063,
            "taskCode": 5063,
            "createdDate": "2023-12-21T08:58:05+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "942fe0fd-8fc7-462c-b4ed-a223c22bd644",
            "title": "#4786 - F21.2 Cấu hình quỹ thiện nguyện LIA",
            "index": 4959,
            "taskCode": 4959,
            "createdDate": "2023-12-18T22:24:36+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "55c0aab2-92f5-4202-b86a-d549bfe3befe",
            "title": "[Web] Thêm file cấu hình trên domain để iOS và Google có thể nhận diện được app",
            "index": 4893,
            "taskCode": 4893,
            "createdDate": "2023-12-16T11:28:10+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "593b69c0-746f-45aa-bfb4-510ee9b9969d",
            "title": "[BE]  Thêm đánh giá chuyên viên",
            "index": 3831,
            "taskCode": 3831,
            "createdDate": "2023-11-14T09:13:43+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "183e884e-3edb-434a-a8eb-69c8093193db",
            "title": "[BE]  Thêm nhật ký chuyên viên ",
            "index": 3830,
            "taskCode": 3830,
            "createdDate": "2023-11-14T09:13:16+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "8ef5bc6d-5997-44b2-99fb-7d47f396351c",
            "title": "[BE]  Thêm chuyên viên cho api  Booking & Treatment & nhật ký & đánh giá ",
            "index": 3815,
            "taskCode": 3815,
            "createdDate": "2023-11-13T15:48:40+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 23
      },
      {
        "id": "0c00c6da-00f9-4f30-ace2-0ddc344da900",
        "settingId": "e034ca94-2243-4592-a3cb-9f3a8f9eb000",
        "title": "CLOSE",
        "settingCode": "S007",
        "color": "a59faa",
        "index": 383,
        "cards": [
          {
            "id": "c1ecda5f-869e-462d-8832-3561a31dcf32",
            "title": ".",
            "index": 8361,
            "taskCode": 8361,
            "createdDate": "2024-03-05T14:03:23+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "ea7a3e43-2d78-4b1d-ac26-d62ab30585a6",
              "settingCode": "I005",
              "color": "",
              "title": "SUBTASK"
            },
            "subcardsCount": 0
          },
          {
            "id": "a4fef1b7-0dcd-469f-a4ba-57909f5880ce",
            "title": "[BE] - Tích hợp api của bên INCOM vào flow OTP sms ",
            "index": 8044,
            "taskCode": 8044,
            "createdDate": "2024-02-27T06:56:25+07:00",
            "starred": false,
            "assignee": {
              "id": "6fc4b661-7c51-40dd-bcb8-96c2202d01ac",
              "firsttitle": null,
              "lasttitle": null,
              "fulltitle": "Đỗ Trung Đức",
              "avatar": null
            },
            "projectLabels": [],
            "issueType": {
              "settingId": "d06a6b69-31e3-4cbd-8c90-2b4effce0acc",
              "settingCode": "I001",
              "color": "",
              "title": "TASK"
            },
            "subcardsCount": 0
          }
        ],
        "cardsQty": 2
      },
      {
        "id": "17029eab-a4b8-4472-afe6-c4a8c343e563",
        "settingId": "f14ded21-2677-472b-b21d-86514f06f64d",
        "title": "Ready to UAT",
        "settingCode": "S024",
        "color": "b8e986",
        "index": 385,
        "cards": [],
        "cardsQty": 0
      }
    ]
  }
}
const DigiworkPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
        ]
      },
      {
        id: 2,
        title: 'Doing',
        cards: [
          {
            id: 2,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      }
    ]
  }


  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
    <>
      {
        false ? (
          <Loader />
        ) : (
          <div>
            <Header activeHeading={3} />
            <br />
            <br />

            <Board initialBoard={dataConstant.data} />
            <Footer />
          </div>
        )
      }
    </>
  );
};

export default DigiworkPage;
