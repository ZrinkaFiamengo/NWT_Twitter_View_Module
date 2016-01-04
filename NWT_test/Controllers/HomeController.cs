using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NWT_test.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [Authorize]
        public ActionResult Profile()
        {

            return View();
        }

        [Authorize]
        public ActionResult Following()
        {

            return View();
        }

        [Authorize]
        public ActionResult Favourites()
        {

            return View();
        }

        [Authorize]
        public ActionResult Hashtag()
        {

            return View();
        }

        [Authorize]
        public ActionResult EditProfile()
        {

            return View();
        }
    }
}