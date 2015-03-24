using System.Web;
using System.Web.Optimization;

namespace Airguitar
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Assets/global/plugins/angularjs/angular.js",
                        "~/Assets/global/plugins/angularjs/angular-resource.js",
                        "~/Assets/global/plugins/angularjs/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Assets/app.js",
                        "~/Assets/controllers.js",
                        "~/Assets/global/plugins/jquery-ui/jquery-ui-1.11.2.js",
                        "~/Assets/global/plugins/jquery-iPicture/jQuery.iPicture.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Assets/app.js",
                        "~/Assets/controllers.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
        }
    }
}
