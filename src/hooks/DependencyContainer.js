import { useRef, useCallback } from "react";

/**
 * Custom hook which sets up a ref for housing
 * dependencies required by functional components,
 * with getters and setters for managing dependencies.
 *
 * @param {*} defaults
 */
const useDependencyContainer = (defaults) => {
  /**
   * The dependencies container ref.
   *
   * @var {React.MutableRefObject}
   */
  const dependencies = useRef(defaults);

  /**
   * Set a single dependency.
   *
   * @param {string} key
   * @param {*} value
   */
  const setDependency = useCallback((key, value) => {
    dependencies.current[key] = value;
  }, []);

  /**
   * Get a single dependency.
   *
   * @param {string} key
   * @return {*}
   */
  const getDependency = useCallback((key) => {
    return dependencies.current[key] || null;
  }, []);

  /**
   * Set one or more dependencies. Accepts an object whose properties
   * are merged with any dependencies currently in the container.
   *
   * @param {Object} newDeps
   */
  const setDependencies = useCallback((newDeps) => {
    console.log(newDeps);
    const { current: existingDeps } = dependencies;
    dependencies.current = { ...existingDeps, ...newDeps };
  }, []);

  /**
   * Returns all the dependencies in the container.
   *
   * @return {Object}
   */
  const getDependencies = useCallback(() => {
    return dependencies.current;
  }, []);

  return { getDependency, setDependency, getDependencies, setDependencies };
};

export default useDependencyContainer;
