const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config()
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const asyncHandler = require("express-async-handler");
const { User } = require("../../Models/UserSchema");
const { Post } = require("../../Models/Post");
const { Chat } = require("../../Models/Chat");
const MessageModel  = require("../../Models/Message");
const axios = require("axios");
const { Verification } = require("../../Models/Verification");
const { Report } = require("../../Models/ReportUserSchema");
const { ReportPost } = require("../../Models/ReportPostSchema");







//job-service-url-//
const uri = "http://localhost:5001"

// const jobpostServiceProxy = httpProxy("http://localhost:5001/"); 
//@description: Register new user
// @route : POST /api/users
// @access : public

 
const registerUser = asyncHandler(async (req, res) => {
   
  const { name, email, password } = req.body;
    
  if (!name||!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
 
 
    const userExists = await User.findOne({ email });
     console.log(userExists, "lets seeee");
  if (userExists) {
      res.status(400).json({message:"user already exists",status :false})
      console.log("error checked");
    // throw new Error("User already exists");
  } else {
    // Hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create User

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign(
      { userId: user._id },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "7d" }
    );

    if (user) {
      res.status(201).json({
        name:user.name,
        email: user.email,
        _id: user._id,
        status: true,
        message: "account created successfully",
        token
      });
    } else {
      res.status(400);
      throw new Error("invalid user details"); 
    }
  }
});




const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email }); 

  const token = await jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d", });
  console.log(user, "yooooooooooooooooyoyoyoyoyo");
  //user.token = token
  if (user && (await bcrypt.compare(password, user.password))) {
    
    //res.send(user);
    res.send({
      name: user.name,
      email: user.email,  
      _id: user._id,
      verification: user.verification,
      requests: user.requests,
      network:user.network,
      token
    });
    
  } else{
    
   res.status(400).json({ message: "invalid credentials", status: false });
   throw new Error("invalid  details");
  }
});



 
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  email.toString();
  await User.updateOne({ email }, { otp: Math.floor(1000 + Math.random() * 9000), });
  User.findOne({ email }).exec(async (error, data) => {
    if (error) {
      console.log(error);
    } else {
      try {

        if (data?._id) {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "dennysjoseph80@gmail.com",
              pass: process.env.GOOGLEAPPS,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

          let info = await transporter.sendMail({
            from: "dennysjoseph80@gmail.com",
            to: email,
            subject: "job-hunter - forgotpassword otp",
            text: `Your one time password is  ${data.otp}`,
          });

          res.send({ status: true, message: "success" });
        } else {
          res.send({ status: false, message: "account doesnot exist" });
        }
      } catch (err) {
        res.send({ status: false, message: "success" });
        console.log(err);
      }
    }
  });
 
});




const emailVerification = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {otp} = req.body;
  User.findOne({ otp }).exec(async (error, data) => { 
    console.log(data);
    if (data) {
       const token = await jwt.sign(
         { userId: data._id },
         process.env.JWTPRIVATEKEY,
         { expiresIn: "7d" }
      );
       await User.updateOne({  email:data.email }, { otp: 0 });
      res.status(200).json({ token: token, email: data.email,userId:data._id, status: true })
      
    } else {
      res.json({ message:"invalid otp", status: false });
    }

  })

});




const post = async (req, res) => {

  const data = req.query;
  
  userPost = {
    name:"", 
    userId:"", 
    description: "",
    image: "",
    video: "",
    likes: [],
    comments: [],
    date: "",
  }; 
  
  if (data.type === "image") {
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".png");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {
          console.log("no image");
          res.json({ noImage: "select image" });
        } else {
          userPost.name = data.name;
          userPost.userId = data.userId;
          userPost.description = data.description;
          userPost.date = data.date;
          userPost.timeStamp = data.timeStamp;
          userPost.image = req.file.filename;

          const post = await Post(userPost).save();

          console.log(post, "post.....");

          if (post) {
            res
              .status(201)
              .json({ status: true, message: "post created succesfully" });
          }
        }
      });
    } catch (error) {
      res.Status(500).json({ err, status: false, message: "operation failed" });
      console.log(error);
    }
  } else if (data.type === "video") {
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".mp4");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {
          console.log("no video");
          res.json({ noImage: "select video" });
        } else {
          userPost.name = data.name;
          userPost.userId = data.userId;
          userPost.description = data.description;
          userPost.date = data.date;
          userPost.timeStamp = data.timeStamp;
          userPost.video = req.file.filename;

          const post = await Post(userPost).save();

          console.log(post, "post.....");

          if (post) {
            res
              .status(201)
              .json({ status: true, message: "post created succesfully" });
          }
        }
      });
    } catch (error) {
      res.Status(500).json({ err, status: false, message: "operation failed" });
      console.log(error);
    }
  } else {
    
      try {
       

            userPost.name = data.name;
            userPost.userId = data.userId;
            userPost.description = data.description;
            userPost.date = data.date;
            userPost.timeStamp = data.timeStamp;
           

            const post = await Post(userPost).save();

            console.log(post, "post.....");

            if (post) {
              res
                .status(201)
                .json({ status: true, message: "post created succesfully" });
            }
       
       
      } catch (error) {
        res
          .Status(500)
          .json({ err, status: false, message: "operation failed" });
        console.log(error);
      }

  }
        
};




const feeds = asyncHandler(async (req, res) => {
  
  Post.find({})
    .populate("userId")
    .populate("comments.userId")
    .exec(async (error, data) => {
      if (error) {
        console.log(error);
      } else {
        try {
          
          data.reverse();
          res.json({ data: data });
        } catch (err) {
          res.send({ status: false, message: "failed" });
          console.log(err);
        }
      }
    });
});




const Like = asyncHandler(async (req, res) => {


  
  let notification = {
    userId: "",
    content: "",
    postId:"",
    timeStamp: Date.now()
  }


  try {

   let wait =  await Post.updateOne({ _id: req.body.postId },
      { $pull: { "likes": req.body.userId } }
    )

    let likeNotifications = await Post.find(
      {
       _id:req.body.postId,
      }
    );

    let isExist = await User.find({
      _id: likeNotifications[0].userId,
      notifications: {
        $elemMatch: {
      
            userId: req.body.userId,
            content: "liked your post",
          
        },
      }
    });



    notification.userId = req.body.userId;
    notification.content = "liked your post";
    notification.postId = likeNotifications._id;

   
    
    if (isExist.length === 0) {
          await User.findByIdAndUpdate(
            likeNotifications[0].userId,
            {
              $push: { notifications: notification },
            },
            {
              new: true,
            }
          )
    } else {
    
       await User.findByIdAndUpdate(
         likeNotifications[0].userId,
         {
           $pull: {
             notifications: {
               userId: req.body.userId,
              //  content: "liked your post",
             },
           },
         },

         {
           new: true,
         }
       ).then((data) => {
         console.log(data);
       });
      
    }
  
 
    

    if (wait.modifiedCount === 0) {
      await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { likes: req.body.userId },
        },
        {
          new: true,
        }
      ).then((data) => {
        res.status(200).json({ status: true, message: "like success", post: data });
      });
    } else {
       res.status(200).json({ status: true, message: "unlike success", });
   }
 
  } catch (error) {
    res.status(500).json({ status: false, message: "something went wrong." });
    console.log(error);
} 

});




const rejectRequest = asyncHandler(async (req, res) => {
  try {

   let wait =  await User.updateOne({ _id: req.body.userId },
      { $pull: { "requests": req.body.senderId } }
    )
     res
       .status(200)
      .json({ status: true, message: "like success", data: wait });
    
 
  } catch (error) {
    res.status(500).json({ status: false, message: "something went wrong." });
    console.log(error);
} 

});




const acceptRequest = asyncHandler(async (req, res) => {
  console.log(req.body,"im working hereeee.......");
  try {

     await User.findByIdAndUpdate(
       req.body.userId,
       {
         $push: { network: req.body.senderId },
       },
       {
         new: true,
       }
     ).then(async(data) => {
      
         await User.findByIdAndUpdate(
           req.body.senderId,
           {
             $push: { network: req.body.userId },
           },
           {
             new: true,
           })
       
       res
         .status(200)
         .json({ status: true, message: "like success", data: data });
     });

   let wait =  await User.updateOne({ _id: req.body.userId },
      { $pull: { "requests": req.body.senderId } }
    )
    console.log(wait,"fffffffffffff");

 
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "something went wrong." });
    
} 

});




const request = asyncHandler(async (req, res) => {

  console.log(req.body,"yesss");
  try {

  //  await User.updateOne({ _id: req.body.userId },
  //     { $pull: { "requests": req.body.senderId } }
  //   )

      await User.findByIdAndUpdate(
        req.body.userId,
        {
          $push: { requests: req.body.senderId },
        },
        {
          new: true,
        }
      ).then((data) => {
        console.log(data,"ooiiiiiii");
        res
          .status(200)
          .json({ status: true, message: "request success", request: data });
      });
   
 
  } catch (error) {
    res.status(500).json({ status: false, message: "something went wrong." });
    console.log(error);
} 

});



const Comment = asyncHandler(async (req, res) => {

    let notification = {
      userId: "",
      content: "",
      postId: "",
      timeStamp: Date.now(),
    };

 
  let commentData = {
    userId: req.body.userId,
    name:req.body.name,
    comment: req.body.comments,
    timeStamp:new Date()
  }
//FIND POSTED USER
  
  
    let commentNotifications = await Post.find({
      _id: req.body.postId,
    });
  
  notification.userId = req.body.userId;
  notification.content = "commented on your post...";
  notification.postId = req.body.postId;
//send notification
  await User.findByIdAndUpdate(
      commentNotifications[0].userId,
          {
             $push: { notifications: notification },
           },
       {
             new: true,
       }
  );
  

    await Post.findByIdAndUpdate(
      req.body.postId,
      {
        $push: { comments: commentData },
      },
      {
        new: true,
      }
    ).then((data) => {
      res
        .status(200)
        .json({ status: true, message: "comment success", comment: data });
    }).catch((error) => {
        res.status(200)
          .json({ status: false, message: "comment failed", error: error });
    })
  
})


const profileCard = asyncHandler(async (req, res) => {
    console.log(req.file,"filess")
  
  let data = req.query
 
  
   
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/resumes"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-resume-"+".pdf");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {

           console.log( "no file...");
          await User.updateOne(
            { _id: data._id },

            {
              name: JSON.parse(data.details[0]).name,
              headline: JSON.parse(data.details[0]).headline,
              currentposition: JSON.parse(data.details[0]).currentposition,
              industry: JSON.parse(data.details[0]).industry,
              skills: data.skills,
            }
          ).then(async () => {
            await User.find({
              _id: data._id
            }).then((user) => {
                
              res.json({
                status: true,
                message: "file uploaded",
                user: user,
              });
            })
              
          });
          
        } else {
          await User.updateOne(
            { _id: data._id },
            {
              name: JSON.parse(data.details[0]).name,
              headline: JSON.parse(data.details[0]).headline,
              currentposition: JSON.parse(data.details[0]).currentposition,
              industry: JSON.parse(data.details[0]).industry,
              skills: data.skills,
              resume: req.file.filename,
            }
          ).then(async () => {
            await User.find({
              _id: data._id,
            }).then((user) => {
              res.json({
                status: true,
                message: "file uploaded",
                user: user,
              });
            });
          });

          
        }


      })


  

  
})


const getUser = asyncHandler(async (req, res) => {

  try {
  User.findOne({ _id: req.body._id }).populate("requests").populate("network").populate("notifications.userId").then((data) => {
 
        res.json({ status: true, message: "success", data: data });
       
     })
    .catch((error) => {
        res.status(200)
          .json({ status: false, message: "operation failed", error: error });
     })
  } catch (err) {
    console.log(err);
  }
   
  
})




//REPORT USER

const reportUser = asyncHandler(async (req, res) => {

  let reason = {
    userId: req.body.currentUser,
    reason: req.body.reason
  }
  try {
    const isExist = await Report.findOne({ reportedId: req.body.reportedId });

    if (isExist === null) {
      Report.create({
        reportedId: req.body.reportedId,

        reasons: [
          {
            userId: req.body.currentUser,
            reason: req.body.reason,
          }
        ],
        
      })
        .then((data) => {
          res.status(200).json(data)
        })
    } else {
      Report.find({
        reportedId: req.body.reportedId,
        reasons: { $elemMatch: { userId: req.body.currentUser } },
      }).then(async (data) => {
        if (data.length === 0) {

          await Report.findByIdAndUpdate(
            req.body.reportedId,
            {
              $push: { reasons: reason },
            },
            {
              new: true,
            }
          ).then((data) => {
            res.status(200).json(data);
          })

        } else {

          res.status(200).json({ status: true, message: "already reported" });
          
        }
      })
    }
   
  } catch (err) {
    console.log(err);
  }
   
  
});





//REPORT POST

const reportPost = asyncHandler(async (req, res) => {
  let reason = {
    userId: req.body.currentUser,
    reason: req.body.reason,
  };
  try {
    const isExist = await ReportPost.findOne({ reportedPostId: req.body.reportedPostId });
    console.log(req.body);
    if (isExist === null) {
      ReportPost.create({
        reportedPostId: req.body.reportedPostId,
       autherId:req.body.autherId,
        reasons: [
          {
            userId: req.body.currentUser,
            reason: req.body.reason,
          },
        ],
      }).then((data) => {
        res.status(200).json(data);
      });
    } else {
      ReportPost.find({
        reportedPostId: req.body.reportedId,
        reasons: { $elemMatch: { userId: req.body.currentUser } },
      }).then(async (data) => {
        if (data.length === 0) {
          await ReportPost.findByIdAndUpdate(
            req.body.reportedPostId,
            {
              $push: { reasons: reason }, 
            },
            {
              new: true,
            }
          ).then((data) => {
            res.status(200).json(data);
          });
        } else {
          res.status(200).json({ status: true, message: "already reported" });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});




const getUsers = asyncHandler(async (req, res) => {

  try {
  User.find({ }).then((data) => {
 
        res.json({ status: true, message: "success", data: data });
       
     })
    .catch((error) => {
        res.status(200)
          .json({ status: false, message: "operation failed", error: error });
     })
  } catch (err) {
    console.log(err);
  }
   
  
})



const removeConnection = asyncHandler(async (req, res) => {
 console.log(req.body,"whosssss")
  try {
  User.updateOne(
    { _id: req.body.currentUser },
    { $pull: { "network": req.body.removedUser } }
  )
    .then((data) => {
      console.log(data, "ggggg");
      User.updateOne(
        { _id: req.body.removedUser },
        { $pull: { "network": req.body.currentUser } }
      );
      res.json({ status: true, message: "success", data: data });
    })
    .catch((error) => {
      res
        .status(200)
        .json({ status: false, message: "operation failed", error: error });
    });
  } catch (err) {
    console.log(err);
  }
   
  
})





const getUserRequests = asyncHandler(async (req, res) => {
  console.log(req.body);
  User.findOne({ _id: req.body._id }).populate("requests").then((data) => {
   res.status(200).json(data)
  })
})


const profileVerification = asyncHandler(async (req, res) => {
  let verification = {
    user:req.body.userId
  }

  try {
   await Verification(verification).save().then(async(data) => {
     console.log(data, "trying.");
      await User.updateOne({ _id: data.user },
      { verification: "pending"}
    )
    });
  } catch (error) {
    console.log(error);
  }
 
});

 



const basicInfo = asyncHandler(async (req, res) => {
 console.log(req.body,"incoming.........................");
  try {
    await User.updateOne(
      { _id: req.body._id },
      {
        age: req.body.details.age,
        yearsofexperience: req.body.details.yearsofexperience,
        location: req.body.details.location,
        availability: req.body.details.availability,
        about: req.body.details.about,
      }
    )
      .then(async (data) => {
        const user = await User.findOne({ _id: req.body._id });
        console.log(user, "response...........");
        res.status(200).json({
          status: true,
          message: "updated successfully",
          user: user,
          data: data,
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: "operation failed", error: error });
      });
  } catch (err) {
    console.log(err);
  }
});



const experience = asyncHandler(async (req, res) => {
 
  let expData = {
    title: req.body.experience.title,
    employmenttype: req.body.experience.employmenttype,
    companyname: req.body.experience.companyname,
    companylocation: req.body.experience.companylocation,
    startdate: req.body.experience.startdate,
    enddate: req.body.experience.enddate,
    industry: req.body.experience.industry,
    uId:Date.now(),
  };
  try {
     console.log( "incoming.........................");
    await User.findByIdAndUpdate(
      req.body._id,
      {
        $push: { experience: expData },
      },
      {
        new: true,
      }
    )
      .then(async (data) => {
        console.log(data);
        const user = await User.findOne({ _id: req.body._id });
        console.log(user, "response...........");
        res.status(200).json({
          status: true,
          message: "updated successfully",
          user: user,
          data: data,
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: "operation failed", error: error });
      });
  } catch (err) {
    console.log(err);
  }
});



const certifications = asyncHandler(async (req, res) => {
 
  let certData = {
    name: req.body.certification.name,
    issuingorganization: req.body.certification.issuingorganization,
    issuedate: req.body.certification.issuedate,
    credentialid: req.body.certification.credentialid,
    credentialurl: req.body.certification.credentialurl,
    uId: Date.now(),
  };
  try {
     console.log( "incoming.........................");
    await User.findByIdAndUpdate(
      req.body._id,
      {
        $push: { certifications: certData },
      },
      {
        new: true,
      }
    )
      .then(async (data) => {
        console.log(data);
        const user = await User.findOne({ _id: req.body._id });
        console.log(user, "response...........");
        res.status(200).json({
          status: true,
          message: "updated successfully",
          user: user,
          data: data,
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: "operation failed", error: error });
      });
  } catch (err) {
    console.log(err);
  }
});





const education = asyncHandler(async (req, res) => {
 
  let edData = {
    school: req.body.education.school,
    degree: req.body.education.degree,
    fieldofstudy: req.body.education.fieldofstudy,
    startdate: req.body.education.startdate,
    enddate: req.body.education.enddate,
    decription: req.body.education.description,
    uId: Date.now(),
  };
  try {
     console.log( "incoming.........................");
    await User.findByIdAndUpdate(
      req.body._id,
      {
        $push: { education: edData },
      },
      {
        new: true,
      }
    )
      .then(async (data) => {
        console.log(data);
        const user = await User.findOne({ _id: req.body._id });
        console.log(user, "response...........");
        res.status(200).json({
          status: true,
          message: "updated successfully",
          user: user,
          data: data,
        });
      })
      .catch((error) => {
        res
          .status(200)
          .json({ status: false, message: "operation failed", error: error });
      });
  } catch (err) {
    console.log(err);
  }
});





const deleteDetail = asyncHandler(async (req, res) => {
 
  if (req.body.item === "experience") {
     try {
       console.log("incoming.........................");
       await User.findByIdAndUpdate(
         req.body._id,
         { $pull: { experience: { uId: req.body.uId } } },
         {
           new: true,
         }
       )
         .then(async (data) => {
           console.log(data);
           const user = await User.findOne({ _id: req.body._id });
           // console.log(user, "response...........");
           res.status(200).json({
             status: true,
             message: "updated successfully",
             user: user,
             data: data,
           });
         })
         .catch((error) => {
           res
             .status(200)
             .json({
               status: false,
               message: "operation failed",
               error: error,
             });
         });
     } catch (err) {
       console.log(err);
     }
  }

  if (req.body.item === "certificate") {
    try {
      console.log("incoming.........................");
      await User.findByIdAndUpdate(
        req.body._id,
        { $pull: { certifications: { uId: req.body.uId } } },
        {
          new: true,
        }
      )
        .then(async (data) => {
          console.log(data);
          const user = await User.findOne({ _id: req.body._id });
          // console.log(user, "response...........");
          res.status(200).json({
            status: true,
            message: "updated successfully",
            user: user,
            data: data,
          });
        })
        .catch((error) => {
          res.status(200).json({
            status: false,
            message: "operation failed",
            error: error,
          });
        });
    } catch (err) {
      console.log(err);
    }
  }


  if (req.body.item === "education") {
    try {
      console.log("incoming.........................");
      await User.findByIdAndUpdate(
        req.body._id,
        { $pull: { education: { uId: req.body.uId } } },
        {
          new: true,
        }
      )
        .then(async (data) => {
          console.log(data);
          const user = await User.findOne({ _id: req.body._id });
          // console.log(user, "response...........");
          res.status(200).json({
            status: true,
            message: "updated successfully",
            user: user,
            data: data,
          });
        })
        .catch((error) => {
          res.status(200).json({
            status: false,
            message: "operation failed",
            error: error,
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

 

});




const profile = asyncHandler(async (req, res) => {


  const data = req.query;


  if (data.type === "image") {
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".png");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {
          console.log("no image");
          res.json({ noImage: "select image" });
        } else {

          await User.findByIdAndUpdate(
            data.userId,
            {
              $push: { profile: req.file.filename },
            },
            {
              new: true,
            }
          ).then(async (data) => {
            res
              .status(200)
              .json({ status: true, message: "file uploaded", user: data });
          });

          
        }
      });
    } catch (error) {
      res.status(500).json({ err, status: false, message: "operation failed" });
      console.log(error);
    }
  }

 
 
});





//----------chat------------//


const createChat = async (req, res) => {
  Chat.find({
    members: {
      $all: [req.body.senderId, req.body.recieverId],
    },
  }).then(async(data) => {
    if (data.length > 0) {
      res.status(200).json(data); 

    } else {

    const newChat = new Chat({
    members:[req.body.senderId,req.body.recieverId]
  })

  try{
    const result = await newChat.save()
    res.status(200).json(result)
  }catch (err) {
    res.status(500).json(err)
  }
      
    }

  })

  
}


const userChat = async (req, res) => {
  console.log("im hitting the user chat");
  try {

    const chat = await Chat.find({
      members:{$in:[req.params.userId]}
    })

    res.status(200).json(chat)  
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}


const findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


const addMessage = async (req, res) => {

  const { chatId, senderId, text } = req.body;

  const message = new MessageModel({
    chatId: req.body.message.chatId, 
    senderId: req.body.message.senderId,
    text: req.body.message.text,
  });
  try {
    const result = await message.save(); 

    console.log(result,"yesssssssssssssss");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


const getMessages = async (req, res) => {
  const { chatId } = req.params;
  console.log(chatId,"fffffffffffffffffffffffffffffff")
  try {
    const result = await MessageModel.find({chatId:chatId });
    console.log(result,"hhhhhhhhhh");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};



//----------chat -- End ---------//






// --------jobservice-------//

const getJobs = asyncHandler(async (req, res) => {
 console.log("im working you know..................");
  
  axios
    .get(`${uri}/jobs/jobs`)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data) 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

 
})



const postJobs = asyncHandler(async (req, res) => {
 
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".png");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {
          console.log("no image");
          res.json({ noImage: "select image" });
          
        } 

          try {
            axios
              .post(
                `${uri}/jobs/job`,
                { key: req.query, image: req.file.filename },
                
              )
              .then(function (response) {
                console.log(response, "yes........", Math.random());
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
          } catch (err) {
            console.log(err);
          }

      });


    } catch (error) {
      res.status(500).json({ err, status: false, message: "operation failed" });
      console.log(error);
    }
 
})



const apply = asyncHandler(async (req, res) => {

  await User.findById({ _id: req.body.user._id }).then((data) => {

     try {
       axios
         .post(`${uri}/jobs/apply`, {
           user: data,
           jobId: req.body.jobId,
         })
         .then(function (response) {
           res.status(200).json(response.data)
          
         })
         .catch(function (error) {
           // handle error
           console.log(error);
             res.status(500).json(error);
         });
       
     } catch (err) {
       console.log(err);
    }
    
  })

})


const getmyjob = asyncHandler(async (req, res) => {

 


     try {
       axios
         .post(`${uri}/jobs/getmyjobs`, {
           userId: req.body.userId,
         })
         .then(function (response) {
           res.status(200).json(response.data)
          
         })
         .catch(function (error) {
           // handle error
           console.log(error);
             res.status(500).json(error);
         });
       
     } catch (err) {
       console.log(err);
    }
    



    
  
})

//----------- job service ------///
 


module.exports = {
  getUsers,
  registerUser,
  loginUser,
  forgotPassword,
  emailVerification,
  post,
  feeds,
  Like,
  Comment,
  profileCard,
  getUser,
  createChat,
  basicInfo,
  experience,
  certifications,
  education,
  deleteDetail,
  profile,
  getJobs,
  postJobs,
  apply,
  userChat,
  findChat,
  addMessage,
  getMessages,
  request,
  getUserRequests,
  acceptRequest,
  rejectRequest,
  getmyjob,
  profileVerification,
  reportUser,
  reportPost,
  removeConnection,
};
