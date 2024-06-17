import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
const items = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

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
        "id": "2364e255-bc3f-47cf-bfe1-df914de2695d",
        "settingId": "6b67b219-1ab9-4b22-812b-71e66a6b7288",
        "title": "ON HOLD",
        "settingCode": "S005",
        "color": "ddc2e3",
        "index": 376,
        "cards": [
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

    ]
  }
}
const DigiworkPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

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
  };

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    // window.scrollTo(0, 0);
  }, [allProducts, categoryData]);

  return (
    <>
      {false ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />

          <div className="flex justify-between">
            <Menu
              theme={theme}
              onClick={onClick}
              style={{ width: 256 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[current]}
              mode="inline"
              items={items}
            />

            <Board initialBoard={dataConstant.data} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default DigiworkPage;