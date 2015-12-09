using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NWT_test.Startup))]
namespace NWT_test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
