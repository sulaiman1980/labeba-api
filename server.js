"use strict";
const express=require("express"),cors=require("cors"),app=express();app.use(cors());app.use(express.json());app.get("/",(r,s)=>s.send("LABEBA API running"));app.get("/health",(r,s)=>s.json({ok:true}));const PORT=process.env.PORT||3000;app.listen(PORT,"0.0.0.0",()=>console.log("Listening on",PORT));
