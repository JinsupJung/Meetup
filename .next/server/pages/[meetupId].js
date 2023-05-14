(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 2501:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(2501);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetupDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: props.description
            })
        ]
    });
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(meetups_MeetupDetail, {
                image: props.meetupData.image,
                title: props.meetupData.title,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    });
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://Flome:M!B63up-4i5L3BU@cluster0.db6lj76.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://Flome:M!B63up-4i5L3BU@cluster0.db6lj76.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: (0,external_mongodb_.ObjectId)(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8041)));
module.exports = __webpack_exports__;

})();