namespace Nawi.Api.Core.Infrastructure.Extensions
{
    /// <summary>
    /// Extension methods for IHostEnvironment to check for specific environments.
    /// </summary>
    public static class HostEnvironmentExtensions
    {
        /// <summary>
        /// The name of the local development environment.
        /// </summary>
        public const string Local = "Local";
        /// <summary>
        /// Checks if the current environment is "Local".
        /// </summary>
        /// <param name="env">The host environment to check.</param>
        /// <returns>True if the environment is "Local"; otherwise, false.</returns>
        public static bool IsLocal(this IHostEnvironment env) =>
            env.IsEnvironment(Local);
    }
}